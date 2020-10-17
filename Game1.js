var config= {

    type: Phaser.AUTO,
    width: 1920,
    height:937,
    physics:{

        default:'arcade',
        arcade:{

            gravity: { y:300 },
            debug:false
        }
    },
    scene:{

        preload: preload,
        create: create,
        update: update
    }

};
var platforms;
var player;
var movewPlatform;
var game = new Phaser.Game(config);
 function preload (){

   this.load.image('bg','Common/PreLoad/BG.png');
   this.load.image('flor1','Common/PreLoad/Tile/3.png');
   this.load.image('flor2','Common/PreLoad/Tile/1.png');
   this.load.image('flor3','Common/PreLoad/Tile/7.png');
   this.load.image('imag9','Common/PreLoad/Tile/9.png');
   this.load.image('imag2','Common/PreLoad/Tile/2.png');
   this.load.image('imag13','Common/PreLoad/Tile/13.png');
   this.load.image('imag12','Common/PreLoad/Tile/12.png');
   this.load.image('imag11','Common/PreLoad/Tile/11.png');
   this.load.image('Tree','Common/PreLoad/Objects/Tree.png');
   this.load.image('strone','Common/PreLoad/Objects/Stone.png');
   this.load.image("Arrow",'Common/PreLoad/Objects/SignArrow.png');
   this.load.image("bras",'Common/PreLoad/Objects/Grass (1).png');
   this.load.image("grass",'Common/PreLoad/Objects/Grass (2).png');
   this.load.image("cactus",'Common/PreLoad/Objects/Cactus (3).png');
   this.load.image("Bush",'Common/Preload/Objects/Bush (2).png');
   this.load.image("topleftPlatform",'Common/Preload/Tile/14.png');
   this.load.image("topMiddPlatform",'Common/Preload/Tile/15.png');
   this.load.image("topRightPlatform",'Common/Preload/Tile/16.png');
   this.load.image("secondTree",'Common/Preload/Objects/Bush (1).png');
   this.load.image("befelowSceletion",'Common/Preload/Objects/Skeleton.png');
   this.load.spritesheet('dude','Common/PreLoad/player/dude.png',{frameWidth:32, frameHeight: 48});
 }

 function create(){
    var bgImg= this.add.image(700,300, 'bg').setScale(1,1);
    bgImg.setScale(2.38,1.4);
    platforms= this.physics.add.staticGroup();
    platforms.create(2, 650, 'flor1').setScale(2.5, 2.5).setOrigin(0,0).refreshBody();
    var flor2= platforms.create(650,780,'flor2').setOrigin(0,0).refreshBody();
    flor2.setScale(1,1.5);
    var flor3= platforms.create(778,841,'flor3').setOrigin(0,0).refreshBody();
    var flor4= platforms.create(905,650,'flor1').setScale(2,2.5).setOrigin(0,0).refreshBody();
    var flor5=  platforms.create(1600,650,'flor2').setScale(2.5,2.5).setOrigin(0,0).refreshBody();
    // flor5.setScale(2.5,2.5);
    var tree1= this.add.image(830,390,'Tree').setOrigin(0,0);
    tree1.setScale(0.86,1);
    var stone= this.add.image(50,578,'strone').setOrigin(0,0);
    var Arrow= this.add.image(220,562,"Arrow").setOrigin(0,0);
    var brass= this.add.image(132,590,"bras").setOrigin(0,0);
    brass.setScale(1.2,1.2);
    var grass= this.add.image(960,590,'grass').setOrigin(0,0);
     grass.setScale(1.2,1.2);
     var Bush= this.add.image(1730,575,'Bush').setOrigin(0,0);
     var cactus= this.add.image(1690,555,'cactus').setOrigin(0,0);
     var topLeftPlat= platforms.create(1200,470,'topleftPlatform').setOrigin(0,0).refreshBody();
     var topMiddPlat= platforms.create(1325,470,'topMiddPlatform').setOrigin(0,0).refreshBody();
     var toRightPlat= platforms.create(1453,470,'topRightPlatform').setOrigin(0,0).refreshBody();
     var secondTree= this.add.image(1400,383,'secondTree').setOrigin(0,0);
     var befelowSceletion= this.add.image(1305,438,'befelowSceletion').setOrigin(0,0);
     befelowSceletion.setScale(1,0.7);
     var image9= this.add.image(0,300,'imag9').setOrigin(0,0);
     var image9_3= this.add.image(125,300,'imag13').setScale(1.4,1).setOrigin(0,0);
     var image9_3= platforms.create(1550,280,'imag12').setOrigin(0,0).refreshBody();
     var image9_3= platforms.create(1550,160,'flor2').setOrigin(0,0).refreshBody();
     var image9_3= platforms.create(1678,280,'imag9').setOrigin(0,0).refreshBody();
     this.add.image(0,173,'flor1').setOrigin(0,0);
    //  var image2_2= this.add.image(1678,160,'imag2').setOrigin(0,0);
    //  var image2_3= this.add.image(1805,160,'imag2').setScale(0.9,1).setOrigin(0,0);
    //  var image9_4= this.add.image(1805,280,'imag9').setOrigin(0,0);



    
    // this.physics.add.collider(player, movewPlatform);


    player = this.physics.add.sprite(100, 450, 'dude');
    player.setBounce(0.2);
    player.setCollideWorldBounds(true);  

    bombs= this.physics.add.group();
    this.physics.add.collider(player,platforms);
    
    var x= (player.x< 400) ? Phaser.Math.Between(400, 0): Phaser.Math.Between(400,0);
    movewPlatform=  bombs.create( x,0,'imag11');
    movewPlatform.setCollideWorldBounds(true);
    movewPlatform.setBounce(0.2);
    movewPlatform.setVelocity(Phaser.Math.Between(-400, 400), 0);


    this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
        frameRate: 10,
        repeat: -1
    });
    
    this.anims.create({
        key: 'turn',
        frames: [ { key: 'dude', frame: 4 } ],
        frameRate: 20
    });
    
    this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
        frameRate: 10,
        repeat: -1
    });
    cursors= this.input.keyboard.createCursorKeys();
    this.physics.add.collider(player, platforms);

    // movP= this.physics.add.group();
    // this.physics.add.collider(movP,platforms);
    // this.ph
    // this.physics.add.collider(platforms,movewPlatform, hitPlat,null,this);
    // this.physics.add.collider(platforms, movewPlatform);
    // flor2= this.add.image()
    // platforms= this.physics.add.staticGround();
 }

 function update(){

    if(cursors.left.isDown){

        player.setVelocityX(-160);
        player.anims.play('left',true);
    }
    else if(cursors.right.isDown){
        player.setVelocityX(160);
        player.anims.play('right',true);
    }
    else{

        player.setVelocityX(0);
        player.anims.play('turn');
    }
    if(cursors.up.isDown && player.body.touching.down){

        player.setVelocityY(-330);
    }

 }


