//Now, we don’t need to draw the rectangle any more for the bird. We want an image here. We can use the image() instruction instead of the rect() instruction
//- The first argument is for the image. - The second and third arguments are for the position. Here we have translated the position to where we want it to be. So we can use 0, 0 - The fourth and fifth are the width and height
//To avoid writing the same code for all the classes, in programming language we have a concept of a Parent / Base class and Children / Sub classes.
//Children/Sub classes created using Parent/Base class inherit all the properties and functions from the parent class.
//Our Base object can have all the properties and functions which we had in the Bird class. We can choose any placeholder image for the BaseClass.
//Box and the Pig classes are very similar to the BaseClass. These classes can become the child class for this parent BaseClass and can inherit all the properties and functions. All the properties and functions of a parent class will be present in the child class. We can also add custom images and all other properties we want to our child class.
//Box and the Pig classes are very similar to the BaseClass. These classes can become the child class for this parent BaseClass and can inherit all the properties and functions. All the properties and functions of a parent class will be present in the child class. We can also add custom images and all other properties we want to our child class.
//We use super() to transfer all the properties of the parent class to the child class through the parent class constructor.
//Finally we want to add the bird image to the bird class constructor as well. You can do it inside the constructor. You can overwrite any of the properties of the parent class inside the child class and change it.
//w we didn't have to write the display function for the child class because it is already defined in theBaseClass and it inherits it from its parent class


class BaseClass{
    constructor(x, y, width, height, angle) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("sprites/base.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
}