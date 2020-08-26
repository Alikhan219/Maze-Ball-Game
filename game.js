const {Engine, Render, Runner, World, Bodies} = Matter;
 
const width = 600;
const height = 600;


const engine= Engine.create();
const {world}= engine;
const render= Render.create({
    element: document.body,
    engine: engine,
    options: {
        wireframes: false,
        width,
        height
    }
});
Render.run(render);
Runner.run(Runner.create(), engine);


const shape= [
Bodies.rectangle(width/2,0,width,20,{
    isStatic: true
}),
Bodies.rectangle(width/2,height,width,20,{
    isStatic: true
}),
Bodies.rectangle(0,height/2,20,height,{
    isStatic: true
}),
Bodies.rectangle(width,height/2,20,height,{
    isStatic: true
})
]
World.add(world,shape)



