import React, { useEffect } from 'react';
import Matter from 'matter-js';
import '../css/section5.css';

function Section5() {
    useEffect(() => {
        let Example = {};

        Example.gravity = function () {
            let Engine = Matter.Engine,
                Render = Matter.Render,
                Runner = Matter.Runner,
                Composites = Matter.Composites,
                Common = Matter.Common,
                MouseConstraint = Matter.MouseConstraint,
                Mouse = Matter.Mouse,
                Composite = Matter.Composite,
                Bodies = Matter.Bodies,
                Events = Matter.Events;

            let engine = Engine.create(),
                world = engine.world;

            let render = Render.create({
                element: document.querySelector('.matter'),
                engine: engine,
                options: {
                    width: 800,
                    height: 600,
                    showVelocity: false,
                    showAngleIndicator: false,
                    wireframes: false,
                    background: 'white'
                }
            });

            Render.run(render);

            let runner = Runner.create();
            Runner.run(runner, engine);

            //# -------------------adding static bodies---------------
            Composite.add(world, [
                Bodies.rectangle(400, 0, 800, 50, { isStatic: true, render: { fillStyle: 'white' } }),
                Bodies.rectangle(400, 600, 800, 50.5, { isStatic: true, render: { fillStyle: 'white' } }),
                Bodies.rectangle(800, 300, 50, 600, { isStatic: true, render: { fillStyle: 'white' } }),
                Bodies.rectangle(0, 300, 50, 600, { isStatic: true, render: { fillStyle: 'white' } })
                // Bodies.circle(400, 300, 400 , {isStatic:true , render : { fillStyle :'red' } } )
            ]);

            //#  ------------------------global gravity----------------
            engine.gravity.y = 0;

            //# ----------------------- creating stack
            let stackW = Composites.stack(400, 300, 10, 6, 0, 0, function (x, y) {
                let body;
                body = Bodies.circle(x, y, 25, { 
                    render: { 
                        sprite: { 
                            texture: '/w.svg' 
                        } 
                    } 
                });
                body.isReverseGravity = true;
                return body;
            });

            let stackS = Composites.stack(400, 300, 10, 6, 0, 0, function (x, y) {
                let body;
                body = Bodies.circle(x, y, 25, { 
                    render: { 
                        sprite: { 
                            texture: '/s.svg' 
                        } 
                    } 
                });
                body.isReverseGravity = false;
                return body;
            });

            Composite.add(world, [stackW, stackS]);

            // adding mouse control
            let mouse = Mouse.create(render.canvas),
                mouseConstraint = MouseConstraint.create(engine, {
                    mouse: mouse,
                    constraint: {
                        stiffness: 0.2,
                        render: {
                            visible: false
                        }
                    }
                });

            Composite.add(world, mouseConstraint);
            render.mouse = mouse;

            // render viewport
            Render.lookAt(render, {
                min: { x: 0, y: 0 },
                max: { x: 800, y: 600 }
            });

            // gravity
            Events.on(engine, 'beforeUpdate', function (event) {
                let bodies = Composite.allBodies(world);
                bodies.forEach(function (body) {
                    if (!body.isStatic) {
                        let gravity = body.isReverseGravity ? -0.001 : 0.001;
                        Matter.Body.applyForce(body, body.position, { x: 0, y: body.mass * gravity });
                    }
                });
            });

            return {
                engine: engine,
                runner: runner,
                render: render,
                canvas: render.canvas,
                stop: function () {
                    Matter.Render.stop(render);
                    Matter.Runner.stop(runner);
                }
            };
        };

        Example.gravity();
    }, []);

    return (
        <>
            <div className="section-5 d-flex justify-content-center align-items-center ">
                <div className="matter overflow-hidden ">

                </div>
            </div>
        </>
    );
}

export default Section5;
