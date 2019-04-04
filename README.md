# _example_oop2
A further OOP example utiilising RequireJS.  
Examples of encapsulation, composition, inheritance, abstraction and polymorphism are demonstrated, as are a couple of design patterns.

The 'Dog' and 'Cat' modules extend 'BaseAnimal'.  
'BaseAnimal' takes care of generic behaviour, like making the animals move around and 'talk'.
Specific properties are overridden in 'Dog' and 'Cat' (such as their graphics), and the 'Cat's behaviour is extended to also enable them to purr.

Main acts as a 'Mediator' to kick things off.
A basic 'Factory' design pattern is used to create, remove and update animals.
Examples of 'finite state' patterns can be observed within the animal modules, and a basic event management system is also demonstrated.

