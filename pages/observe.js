import Head from "next/head";
import useSWR from "swr";
import React, { Suspense } from "react";
import { TrackballControls, Stars } from "@react-three/drei";
import Planet from "../components/Planet";
import Sun from "../components/Sun";
import Background from "../components/Background";
import { Canvas } from "@react-three/fiber";
import { AdaptiveDpr, AdaptiveEvents } from "@react-three/drei";
import { server } from "../lib/server";

const API_URL = `${server}/api/posts`;

async function fetcher(url) {
  try {
    const res = await fetch(url);
    const json = await res.json();
    let planets = [];
    json.message.forEach((row, i) => {
      (row.xRadius = (i + 3) * 12),
        (row.zRadius = (i + 3) * 8),
        planets.push(row);
    });
    return {
      posts: planets,
    };
  } catch (error) {
    return error;
  }
}
function Observe() {
  // @link https://swr.vercel.app/docs/revalidation
  const { data, error } = useSWR(API_URL, fetcher, { refreshInterval: 60 });

  if (error)
    return (
      <div className="z-50 h-screen w-full grid place-items-center">
        <div className="absolute z-50 grid place-items-center">
          <h3 className="text-xl font-secondary uppercase p-8">
            Failed to load.
          </h3>
          <Background />
        </div>
      </div>
    );
  if (!data)
    return (
      <div className="z-50 h-screen w-full grid place-items-center">
        <div className="absolute z-50 grid place-items-center">
          <h3 className="text-xl font-secondary uppercase p-8">Loading...</h3>
          <Background />
        </div>
      </div>
    );

  const posts = data?.posts;

  if (error) {
    console.log("Error:");
    console.log(error);
  }
  if (!data) {
    console.log("No Data:");
    console.log(!data);
  }
  if (!error) {
    console.log("No Error:");
    console.log(!error);
  }
  if (data) {
    console.log("Data:");
    console.log(data);
  }
  return (
    <>
      <Head>
        <title>Orbital | Observe</title>
      </Head>
      <div>
        <div className="mx-auto">
          <Canvas
            dpr={[1, 2]}
            gl={{ antialias: true, alpha: false }}
            camera={{ fov: 25, position: [300, 50, 0] }}
            style={{ height: "100vh" }}
            shadows
          >
            <AdaptiveDpr pixelated />
            <AdaptiveEvents />
            <Suspense fallback={null}>
              <Stars fade={false} />
              <ambientLight intensity={0.02} />
              <pointLight position={[100, 50, 0]} />
              <Sun />
              {posts
                ? posts.map((planet, i) => {
                    {
                      console.log(planet);
                    }
                    return (
                      <Planet
                        post={planet}
                        zRadius={planet.zRadius / 2}
                        xRadius={planet.zRadius / 2}
                        key={i}
                      />
                    );
                  })
                : null}
              <TrackballControls />
            </Suspense>
          </Canvas>
        </div>
      </div>
    </>
  );
}

export default Observe;
