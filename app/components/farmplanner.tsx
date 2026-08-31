"use client";

import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  PerspectiveCamera,
  Environment,
} from "@react-three/drei";
import { useMemo, useState } from "react";

type PlannerInputs = {
  roomLength: number;
  roomWidth: number;
  landSize: number;
  investment: number;
  acTon: number;
  acUnits: number;
  racks: number;
};

/* =========================
   3D FARM ROOM
========================= */

function FarmRoom({
  length,
  width,
  racks,
}: {
  length: number;
  width: number;
  racks: number;
}) {
  const scale = 0.35;

  const roomLength = Math.max(length * scale, 5);
  const roomWidth = Math.max(width * scale, 4);

  const rackCount = Math.min(Math.max(racks, 1), 30);

  return (
    <group>
      {/* FLOOR */}
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -0.05, 0]}
      >
        <planeGeometry args={[roomLength, roomWidth]} />
        <meshStandardMaterial color="#d8c3ad" />
      </mesh>

      {/* BACK WALL */}
      <mesh position={[0, 1.8, -roomWidth / 2]}>
        <boxGeometry args={[roomLength, 3.6, 0.15]} />
        <meshStandardMaterial color="#6b4735" />
      </mesh>

      {/* LEFT WALL */}
      <mesh
        position={[-roomLength / 2, 1.8, 0]}
        rotation={[0, Math.PI / 2, 0]}
      >
        <boxGeometry args={[roomWidth, 3.6, 0.15]} />
        <meshStandardMaterial color="#7b5440" />
      </mesh>

      {/* RIGHT WALL */}
      <mesh
        position={[roomLength / 2, 1.8, 0]}
        rotation={[0, Math.PI / 2, 0]}
      >
        <boxGeometry args={[roomWidth, 3.6, 0.15]} />
        <meshStandardMaterial color="#7b5440" />
      </mesh>

      {/* RACKS */}
      {Array.from({ length: rackCount }).map((_, index) => {
        const columns = Math.max(
          Math.floor(roomLength / 2),
          1
        );

        const row = Math.floor(index / columns);
        const column = index % columns;

        const x =
          -roomLength / 2 +
          1 +
          column * 2;

        const z =
          -roomWidth / 2 +
          1.2 +
          row * 2;

        if (Math.abs(x) > roomLength / 2 - 0.8) {
          return null;
        }

        if (Math.abs(z) > roomWidth / 2 - 0.8) {
          return null;
        }

        return (
          <group key={index} position={[x, 0, z]}>
            {/* Rack frame */}
            <mesh position={[0, 1.2, 0]}>
              <boxGeometry args={[0.7, 2.4, 0.7]} />
              <meshStandardMaterial color="#4b3023" />
            </mesh>

            {/* Mushroom growing levels */}
            {[0.4, 1, 1.6, 2.2].map(
              (height, level) => (
                <mesh
                  key={level}
                  position={[0, height, 0]}
                >
                  <boxGeometry
                    args={[1.1, 0.08, 0.8]}
                  />
                  <meshStandardMaterial color="#9a7254" />
                </mesh>
              )
            )}

            {/* Mushroom bags */}
            {[0.5, 1.1, 1.7, 2.3].map(
              (height, level) => (
                <mesh
                  key={level}
                  position={[0, height, 0.08]}
                >
                  <sphereGeometry
                    args={[0.18, 12, 12]}
                  />
                  <meshStandardMaterial color="#eee2d4" />
                </mesh>
              )
            )}
          </group>
        );
      })}
    </group>
  );
}

/* =========================
   MAIN FARM PLANNER
========================= */

export default function FarmPlanner() {
  const [inputs, setInputs] =
    useState<PlannerInputs>({
      roomLength: 20,
      roomWidth: 10,
      landSize: 5,
      investment: 500000,
      acTon: 1.5,
      acUnits: 2,
      racks: 20,
    });

  const results = useMemo(() => {
    const roomArea =
      inputs.roomLength * inputs.roomWidth;

    const estimatedCapacity =
      inputs.racks * 120;

    const estimatedMonthlyProduction =
      estimatedCapacity * 0.8;

    const estimatedRevenue =
      estimatedMonthlyProduction * 120;

    return {
      roomArea,
      estimatedCapacity,
      estimatedMonthlyProduction,
      estimatedRevenue,
    };
  }, [inputs]);

  const updateInput = (
    field: keyof PlannerInputs,
    value: string
  ) => {
    setInputs((prev) => ({
      ...prev,
      [field]: Number(value),
    }));
  };

  return (
    <section className="border-t border-black/10 bg-white px-6 py-24">
      <div className="mx-auto max-w-7xl">

        {/* HEADER */}

        <div className="mb-14">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#8b674d]">
            Farm Planner
          </p>

          <h2 className="text-4xl font-semibold tracking-tight sm:text-6xl">
            Plan your mushroom farm.
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-black/50">
            Configure your farm and see a live 3D
            representation of your mushroom growing
            room.
          </p>
        </div>

        {/* MAIN GRID */}

        <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">

          {/* =========================
              LEFT INPUT PANEL
          ========================= */}

          <div className="rounded-[2rem] border border-[#9a7254] bg-white p-8 shadow-[0_8px_30px_rgba(120,75,45,0.12)] sm:p-10">

            <div className="grid gap-6 sm:grid-cols-2">

              <Input
                label="Room Length (ft)"
                value={inputs.roomLength}
                onChange={(value) =>
                  updateInput("roomLength", value)
                }
              />

              <Input
                label="Room Width (ft)"
                value={inputs.roomWidth}
                onChange={(value) =>
                  updateInput("roomWidth", value)
                }
              />

              <Input
                label="Land Size (Cent)"
                value={inputs.landSize}
                onChange={(value) =>
                  updateInput("landSize", value)
                }
              />

              <Input
                label="Investment (₹)"
                value={inputs.investment}
                onChange={(value) =>
                  updateInput("investment", value)
                }
              />

              <Input
                label="AC Capacity (Ton)"
                value={inputs.acTon}
                step="0.5"
                onChange={(value) =>
                  updateInput("acTon", value)
                }
              />

              <Input
                label="AC Units"
                value={inputs.acUnits}
                onChange={(value) =>
                  updateInput("acUnits", value)
                }
              />

              <Input
                label="Number of Racks"
                value={inputs.racks}
                onChange={(value) =>
                  updateInput("racks", value)
                }
              />

            </div>

            {/* CALCULATE */}

            <button
              type="button"
              className="mt-8 rounded-full bg-[#2B1A14] px-7 py-4 text-sm font-medium text-white transition hover:bg-[#765139]"
            >
              Calculate Farm
            </button>

          </div>

          {/* =========================
              RIGHT 3D VIEW
          ========================= */}

          <div className="overflow-hidden rounded-[2rem] border border-[#9a7254] bg-[#21140f] shadow-[0_8px_30px_rgba(120,75,45,0.18)]">

            <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">

              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-white/40">
                  3D Farm Model
                </p>

                <p className="mt-1 text-sm text-white/70">
                  {inputs.racks} racks
                </p>
              </div>

              <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/40">
                Drag to rotate
              </span>

            </div>

            <div className="h-[430px] w-full">

              <Canvas>

                <PerspectiveCamera
                  makeDefault
                  position={[10, 8, 12]}
                  fov={45}
                />

                <ambientLight intensity={1.2} />

                <directionalLight
                  position={[5, 10, 5]}
                  intensity={2}
                />

                <pointLight
                  position={[-5, 5, 5]}
                  intensity={1}
                />

                <FarmRoom
                  length={inputs.roomLength}
                  width={inputs.roomWidth}
                  racks={inputs.racks}
                />

                <gridHelper
                  args={[
                    30,
                    30,
                    "#6b4735",
                    "#3b251b",
                  ]}
                  position={[0, -0.04, 0]}
                />

                <OrbitControls
                  enablePan={false}
                  minDistance={7}
                  maxDistance={25}
                  maxPolarAngle={Math.PI / 2.1}
                />

                <Environment preset="city" />

              </Canvas>

            </div>

          </div>

        </div>

        {/* =========================
            RESULTS
        ========================= */}

        <div className="mt-8 rounded-[2rem] bg-[#2B1A14] p-8 text-white sm:p-10">

          <p className="text-xs uppercase tracking-[0.3em] text-white/40">
            Estimated Results
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            <Result
              label="Room Area"
              value={`${results.roomArea.toLocaleString()} sq.ft`}
            />

            <Result
              label="Growing Capacity"
              value={`${results.estimatedCapacity.toLocaleString()} bags`}
            />

            <Result
              label="Monthly Production"
              value={`${results.estimatedMonthlyProduction.toLocaleString()} kg`}
            />

            <Result
              label="Monthly Revenue"
              value={`₹${results.estimatedRevenue.toLocaleString()}`}
              highlight
            />

          </div>

          <div className="mt-10 border-t border-white/10 pt-6">

            <p className="text-xs leading-6 text-white/40">
              These are planning estimates only. Actual
              production and revenue depend on mushroom
              variety, yield, selling price, climate
              control and operating costs.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}


/* =========================
   INPUT COMPONENT
========================= */

function Input({
  label,
  value,
  onChange,
  step = "1",
}: {
  label: string;
  value: number;
  onChange: (value: string) => void;
  step?: string;
}) {
  return (
    <div>

      <label className="mb-2 block text-xs uppercase tracking-[0.2em] text-black/40">
        {label}
      </label>

      <input
        type="number"
        value={value}
        step={step}
        onChange={(e) =>
          onChange(e.target.value)
        }
        className="w-full rounded-xl border border-black/10 bg-[#faf9f7] px-4 py-3 text-black outline-none transition focus:border-[#9a7254] focus:ring-2 focus:ring-[#9a7254]/10"
      />

    </div>
  );
}


/* =========================
   RESULT COMPONENT
========================= */

function Result({
  label,
  value,
  highlight = false,
}: {
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div className="border-b border-white/10 pb-5">

      <p className="text-xs uppercase tracking-[0.18em] text-white/40">
        {label}
      </p>

      <p
        className={`mt-2 text-2xl font-semibold ${
          highlight
            ? "text-white"
            : "text-white/90"
        }`}
      >
        {value}
      </p>

    </div>
  );
}