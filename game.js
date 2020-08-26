const {Engine, Render, Runner, World, Bodies,} = Matter;
 
const width = 800;
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
Bodies.rectangle(400,0,800,20,{
    isStatic: true
}),
Bodies.rectangle(400,600,800,20,{
    isStatic: true
}),
Bodies.rectangle(0,300,20,600,{
    isStatic: true
}),
Bodies.rectangle(800,300,20,600,{
    isStatic: true
})
]
World.add(world,shape)



