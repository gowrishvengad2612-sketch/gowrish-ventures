"use client";

import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  PerspectiveCamera,
  Environment,
  ContactShadows,
} from "@react-three/drei";
import { useMemo, useRef, useState } from "react";
import type { OrbitControls as OrbitControlsImpl } from "three-stdlib";

type PlannerInputs = {
  roomLength: number;
  roomWidth: number;
  landSize: number;
  investment: number;
  acTon: number;
  acUnits: number;
  racks: number;
};

type ViewMode = "integrated" | "room" | "production";

/* =========================================================
   COLORS
========================================================= */

const COLORS = {
  floor: "#dfe3df",
  wall: "#dcebea",
  wallSide: "#c7dddd",
  roof: "#f1eadb",
  frame: "#7b8d89",
  rack: "#8a6650",
  shelf: "#b79578",
  bag: "#eee4d5",
  mushroom: "#d8c3ad",
  green: "#15945b",
  dark: "#123c48",
};

/* =========================================================
   MUSHROOM BAG
========================================================= */

function MushroomBag({
  position,
}: {
  position: [number, number, number];
}) {
  return (
    <group position={position}>
      <mesh scale={[0.22, 0.32, 0.22]}>
        <sphereGeometry args={[1, 16, 16]} />
        <meshStandardMaterial
          color={COLORS.bag}
          roughness={0.8}
        />
      </mesh>

      <mesh position={[0, 0.25, 0]}>
        <sphereGeometry args={[0.08, 12, 12]} />
        <meshStandardMaterial color={COLORS.mushroom} />
      </mesh>
    </group>
  );
}

/* =========================================================
   FARM RACK
========================================================= */

function FarmRack({
  position,
}: {
  position: [number, number, number];
}) {
  const levels = [0.45, 1.05, 1.65, 2.25];

  return (
    <group position={position}>

      {/* Vertical posts */}
      {[
        [-0.55, 1.35, -0.35],
        [0.55, 1.35, -0.35],
        [-0.55, 1.35, 0.35],
        [0.55, 1.35, 0.35],
      ].map((p, i) => (
        <mesh key={i} position={p as [number, number, number]}>
          <boxGeometry args={[0.08, 2.7, 0.08]} />
          <meshStandardMaterial color={COLORS.rack} />
        </mesh>
      ))}

      {/* Growing shelves + mushroom bags */}
      {levels.map((height, level) => (
        <group key={level}>

          <mesh position={[0, height, 0]}>
            <boxGeometry args={[1.25, 0.08, 0.85]} />
            <meshStandardMaterial
              color={COLORS.shelf}
              roughness={0.7}
            />
          </mesh>

          <MushroomBag position={[-0.35, height + 0.25, 0]} />
          <MushroomBag position={[0, height + 0.25, 0]} />
          <MushroomBag position={[0.35, height + 0.25, 0]} />

        </group>
      ))}
    </group>
  );
}

/* =========================================================
   AC UNIT
========================================================= */

function ACUnit({
  position,
}: {
  position: [number, number, number];
}) {
  return (
    <group position={position}>

      <mesh>
        <boxGeometry args={[1.1, 0.55, 0.35]} />
        <meshStandardMaterial
          color="#f4f4f0"
          roughness={0.45}
        />
      </mesh>

      <mesh position={[0, -0.05, 0.19]}>
        <boxGeometry args={[0.75, 0.18, 0.03]} />
        <meshStandardMaterial color="#9aa5a2" />
      </mesh>

      <mesh position={[0, 0, 0.2]}>
        <boxGeometry args={[0.15, 0.15, 0.04]} />
        <meshStandardMaterial color="#65a9b0" />
      </mesh>

    </group>
  );
}

/* =========================================================
   FARM ROOM
========================================================= */

function FarmRoom({
  length,
  width,
  racks,
  acUnits,
  viewMode,
}: {
  length: number;
  width: number;
  racks: number;
  acUnits: number;
  viewMode: ViewMode;
}) {
  /*
    Convert real feet into a comfortable 3D scale.
  */

  const scale = 0.32;

  const roomLength = Math.max(length * scale, 6);
  const roomWidth = Math.max(width * scale, 5);
  const wallHeight = 3.8;

  const rackCount = Math.min(
    Math.max(Math.round(racks), 1),
    40
  );

  /*
    In room view we remove the front roof/wall
    so the user can see inside.
  */

  const showRoof = viewMode === "integrated";
  const showFrontWall = viewMode === "integrated";

  /*
    Calculate rack arrangement.
  */

  const rackColumns = Math.max(
    Math.floor(roomLength / 2),
    1
  );

  const rackRows = Math.max(
    Math.ceil(rackCount / rackColumns),
    1
  );

  const racksToRender = Array.from({
    length: rackCount,
  });

  return (
    <group>

      {/* =================================================
          FLOOR
      ================================================= */}

      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -0.08, 0]}
        receiveShadow
      >
        <planeGeometry
          args={[roomLength, roomWidth]}
        />

        <meshStandardMaterial
          color={COLORS.floor}
          roughness={0.9}
        />
      </mesh>

      {/* =================================================
          FLOOR BORDER
      ================================================= */}

      <mesh
        position={[0, 0, -roomWidth / 2]}
      >
        <boxGeometry
          args={[roomLength, 0.12, 0.12]}
        />

        <meshStandardMaterial
          color={COLORS.frame}
        />
      </mesh>

      <mesh
        position={[0, 0, roomWidth / 2]}
      >
        <boxGeometry
          args={[roomLength, 0.12, 0.12]}
        />

        <meshStandardMaterial
          color={COLORS.frame}
        />
      </mesh>

      {/* =================================================
          BACK WALL
      ================================================= */}

      <mesh
        position={[
          0,
          wallHeight / 2,
          -roomWidth / 2,
        ]}
        castShadow
      >
        <boxGeometry
          args={[
            roomLength,
            wallHeight,
            0.15,
          ]}
        />

        <meshStandardMaterial
          color={COLORS.wall}
          roughness={0.65}
        />
      </mesh>

      {/* =================================================
          LEFT WALL
      ================================================= */}

      <mesh
        position={[
          -roomLength / 2,
          wallHeight / 2,
          0,
        ]}
        rotation={[0, Math.PI / 2, 0]}
        castShadow
      >
        <boxGeometry
          args={[
            roomWidth,
            wallHeight,
            0.15,
          ]}
        />

        <meshStandardMaterial
          color={COLORS.wallSide}
        />
      </mesh>

      {/* =================================================
          RIGHT WALL
      ================================================= */}

      <mesh
        position={[
          roomLength / 2,
          wallHeight / 2,
          0,
        ]}
        rotation={[0, Math.PI / 2, 0]}
        castShadow
      >
        <boxGeometry
          args={[
            roomWidth,
            wallHeight,
            0.15,
          ]}
        />

        <meshStandardMaterial
          color={COLORS.wallSide}
        />
      </mesh>

      {/* =================================================
          FRONT WALL
      ================================================= */}

      {showFrontWall && (
        <mesh
          position={[
            0,
            wallHeight / 2,
            roomWidth / 2,
          ]}
          castShadow
        >
          <boxGeometry
            args={[
              roomLength,
              wallHeight,
              0.15,
            ]}
          />

          <meshStandardMaterial
            color={COLORS.wall}
          />
        </mesh>
      )}

      {/* =================================================
          ROOF
      ================================================= */}

      {showRoof && (
        <mesh
          position={[0, wallHeight, 0]}
          castShadow
        >
          <boxGeometry
            args={[
              roomLength + 0.3,
              0.18,
              roomWidth + 0.3,
            ]}
          />

          <meshStandardMaterial
            color={COLORS.roof}
            roughness={0.75}
          />
        </mesh>
      )}

      {/* =================================================
          DOOR
      ================================================= */}

      <group
        position={[
          0,
          1.25,
          roomWidth / 2 + 0.08,
        ]}
      >
        <mesh>
          <boxGeometry args={[1.3, 2.5, 0.08]} />
          <meshStandardMaterial color="#b7c6c5" />
        </mesh>

        <mesh position={[0.42, 0, 0.06]}>
          <sphereGeometry args={[0.06, 12, 12]} />
          <meshStandardMaterial color="#596663" />
        </mesh>
      </group>

      {/* =================================================
          WINDOWS / VENTILATION
      ================================================= */}

      {[-0.32, 0, 0.32].map((x, i) => (
        <mesh
          key={i}
          position={[
            x * roomLength,
            2.5,
            -roomWidth / 2 - 0.09,
          ]}
        >
          <boxGeometry args={[0.7, 0.5, 0.04]} />
          <meshStandardMaterial
            color="#9fc9ce"
            transparent
            opacity={0.75}
          />
        </mesh>
      ))}

      {/* =================================================
          RACKS
      ================================================= */}

      {racksToRender.map((_, index) => {

        const row = Math.floor(
          index / rackColumns
        );

        const column = index % rackColumns;

        const usableLength =
          roomLength - 2;

        const usableWidth =
          roomWidth - 2;

        const xStep =
          rackColumns > 1
            ? usableLength /
              (rackColumns - 1)
            : 0;

        const zStep =
          rackRows > 1
            ? usableWidth /
              (rackRows - 1)
            : 0;

        const x =
          rackColumns === 1
            ? 0
            : -usableLength / 2 +
              column * xStep;

        const z =
          rackRows === 1
            ? 0
            : -usableWidth / 2 +
              row * zStep;

        return (
          <FarmRack
            key={index}
            position={[x, 0, z]}
          />
        );
      })}

      {/* =================================================
          AC UNITS
      ================================================= */}

      {Array.from({
        length: Math.min(acUnits, 4),
      }).map((_, index) => {

        const spacing =
          roomLength /
          Math.max(acUnits + 1, 2);

        const x =
          -roomLength / 2 +
          spacing * (index + 1);

        return (
          <ACUnit
            key={index}
            position={[
              x,
              3.05,
              -roomWidth / 2 + 0.35,
            ]}
          />
        );
      })}

      {/* =================================================
          SMALL PROCESSING TABLE
      ================================================= */}

      {viewMode === "production" && (
        <group position={[0, 0, roomWidth / 2 - 1]}>

          <mesh position={[0, 1, 0]}>
            <boxGeometry
              args={[2.5, 0.12, 1]}
            />

            <meshStandardMaterial color="#e8e5dc" />
          </mesh>

          {[-1.05, 1.05].map((x, i) => (
            <mesh
              key={i}
              position={[x, 0.5, 0]}
            >
              <boxGeometry
                args={[0.12, 1, 0.12]}
              />

              <meshStandardMaterial color="#777" />
            </mesh>
          ))}

        </group>
      )}
    </group>
  );
}

/* =========================================================
   MAIN FARM PLANNER
========================================================= */

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

  const [viewMode, setViewMode] =
    useState<ViewMode>("room");

  const controlsRef =
    useRef<OrbitControlsImpl | null>(null);

  const results = useMemo(() => {

    const roomArea =
      inputs.roomLength *
      inputs.roomWidth;

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

    const numericValue =
      Number(value);

    setInputs((prev) => ({
      ...prev,
      [field]: Number.isFinite(
        numericValue
      )
        ? numericValue
        : 0,
    }));
  };

  /* =======================================================
     CAMERA VIEWS
  ======================================================= */

  const resetCamera = () => {

    controlsRef.current?.reset();
  };

  const topView = () => {

    if (!controlsRef.current) return;

    controlsRef.current.object.position.set(
      0,
      18,
      0.1
    );

    controlsRef.current.target.set(
      0,
      0,
      0
    );

    controlsRef.current.update();
  };

  const frontView = () => {

    if (!controlsRef.current) return;

    controlsRef.current.object.position.set(
      10,
      7,
      14
    );

    controlsRef.current.target.set(
      0,
      1,
      0
    );

    controlsRef.current.update();
  };

  return (
    <section
      id="planner"
      className="border-t border-black/10 bg-[#f7f8f7] px-6 py-24"
    >

      <div className="mx-auto max-w-7xl">

        {/* =================================================
            HEADER
        ================================================= */}

        <div className="mb-10">

          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#168d59]">
            Smart Farm Planner
          </p>

          <h2 className="text-4xl font-semibold tracking-tight sm:text-6xl">
            Design your mushroom farm.
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-black/50">
            Configure your growing room, racks,
            cooling system and production layout
            while viewing your farm in interactive 3D.
          </p>

        </div>

        {/* =================================================
            PROJECT TYPE
        ================================================= */}

        <div className="mb-5 flex flex-wrap gap-2">

          <button
            type="button"
            onClick={() =>
              setViewMode("integrated")
            }
            className={`rounded-full px-5 py-2 text-xs transition ${
              viewMode === "integrated"
                ? "bg-[#168d59] text-white"
                : "bg-white text-black/50"
            }`}
          >
            Integrated Project
          </button>

          <button
            type="button"
            onClick={() =>
              setViewMode("room")
            }
            className={`rounded-full px-5 py-2 text-xs transition ${
              viewMode === "room"
                ? "bg-[#168d59] text-white"
                : "bg-white text-black/50"
            }`}
          >
            Growing Room
          </button>

          <button
            type="button"
            onClick={() =>
              setViewMode("production")
            }
            className={`rounded-full px-5 py-2 text-xs transition ${
              viewMode === "production"
                ? "bg-[#168d59] text-white"
                : "bg-white text-black/50"
            }`}
          >
            Production Unit
          </button>

        </div>

        {/* =================================================
            MAIN PLANNER
        ================================================= */}

        <div className="grid gap-6 lg:grid-cols-[0.75fr_1.5fr]">

          {/* =================================================
              INPUT PANEL
          ================================================= */}

          <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm">

            <div className="mb-6">

              <p className="text-xs uppercase tracking-[0.25em] text-black/35">
                Farm Configuration
              </p>

              <h3 className="mt-2 text-2xl font-semibold">
                Project parameters
              </h3>

            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">

              <Input
                label="Room Length (ft)"
                value={inputs.roomLength}
                onChange={(value) =>
                  updateInput(
                    "roomLength",
                    value
                  )
                }
              />

              <Input
                label="Room Width (ft)"
                value={inputs.roomWidth}
                onChange={(value) =>
                  updateInput(
                    "roomWidth",
                    value
                  )
                }
              />

              <Input
                label="Land Size (Cent)"
                value={inputs.landSize}
                onChange={(value) =>
                  updateInput(
                    "landSize",
                    value
                  )
                }
              />

              <Input
                label="Investment (₹)"
                value={inputs.investment}
                onChange={(value) =>
                  updateInput(
                    "investment",
                    value
                  )
                }
              />

              <Input
                label="AC Capacity (Ton)"
                value={inputs.acTon}
                step="0.5"
                onChange={(value) =>
                  updateInput(
                    "acTon",
                    value
                  )
                }
              />

              <Input
                label="AC Units"
                value={inputs.acUnits}
                onChange={(value) =>
                  updateInput(
                    "acUnits",
                    value
                  )
                }
              />

              <Input
                label="Number of Racks"
                value={inputs.racks}
                onChange={(value) =>
                  updateInput(
                    "racks",
                    value
                  )
                }
              />

            </div>

            <button
              type="button"
              className="mt-7 w-full rounded-full bg-[#123c48] px-6 py-3.5 text-sm font-medium text-white transition hover:bg-[#168d59]"
            >
              Calculate Farm
            </button>

          </div>

          {/* =================================================
              3D VIEWER
          ================================================= */}

          <div className="overflow-hidden rounded-3xl border border-black/10 bg-[#edf1ef] shadow-sm">

            {/* Viewer Header */}

            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-black/10 bg-white px-5 py-4">

              <div>

                <p className="text-xs uppercase tracking-[0.25em] text-black/35">
                  Interactive 3D Model
                </p>

                <p className="mt-1 text-sm text-black/60">
                  {inputs.roomLength} ×{" "}
                  {inputs.roomWidth} ft •{" "}
                  {inputs.racks} racks
                </p>

              </div>

              <div className="flex gap-2">

                <button
                  type="button"
                  onClick={frontView}
                  className="rounded-full border border-black/10 bg-white px-3 py-1.5 text-xs hover:bg-black hover:text-white"
                >
                  Front
                </button>

                <button
                  type="button"
                  onClick={topView}
                  className="rounded-full border border-black/10 bg-white px-3 py-1.5 text-xs hover:bg-black hover:text-white"
                >
                  Top
                </button>

                <button
                  type="button"
                  onClick={resetCamera}
                  className="rounded-full border border-black/10 bg-white px-3 py-1.5 text-xs hover:bg-black hover:text-white"
                >
                  Reset
                </button>

              </div>

            </div>

            {/* Canvas */}

            <div className="relative h-[520px] w-full">

              <Canvas
                shadows
                dpr={[1, 2]}
              >

                <PerspectiveCamera
                  makeDefault
                  position={[10, 7, 14]}
                  fov={42}
                />

                {/* Lighting */}

                <ambientLight intensity={1.7} />

                <directionalLight
                  position={[8, 14, 8]}
                  intensity={2.5}
                  castShadow
                  shadow-mapSize-width={2048}
                  shadow-mapSize-height={2048}
                />

                <directionalLight
                  position={[-8, 8, -5]}
                  intensity={1}
                />

                {/* Farm */}

                <FarmRoom
                  length={inputs.roomLength}
                  width={inputs.roomWidth}
                  racks={inputs.racks}
                  acUnits={inputs.acUnits}
                  viewMode={viewMode}
                />

                {/* Ground grid */}

                <gridHelper
                  args={[
                    40,
                    40,
                    "#b9c5c2",
                    "#d9dfdc",
                  ]}
                  position={[0, -0.07, 0]}
                />

                {/* Shadows */}

                <ContactShadows
                  position={[0, -0.06, 0]}
                  opacity={0.3}
                  scale={30}
                  blur={2}
                />

                {/* Environment */}

                <Environment preset="city" />

                {/* Controls */}

                <OrbitControls
                  ref={controlsRef}
                  enableDamping
                  dampingFactor={0.08}
                  enablePan
                  minDistance={5}
                  maxDistance={30}
                  maxPolarAngle={
                    Math.PI / 2.05
                  }
                  target={[0, 1, 0]}
                />

              </Canvas>

              {/* Viewer Help */}

              <div className="absolute bottom-4 left-4 rounded-full bg-white/85 px-4 py-2 text-xs text-black/50 shadow-sm backdrop-blur">
                🖱 Drag to rotate • Scroll to zoom •
                Right-drag to pan
              </div>

            </div>

            {/* Bottom Controls */}

            <div className="flex flex-wrap gap-2 border-t border-black/10 bg-white px-5 py-4">

              <span className="rounded-full bg-[#168d59]/10 px-3 py-1.5 text-xs text-[#168d59]">
                ✓ 3D View
              </span>

              <span className="rounded-full bg-black/[0.04] px-3 py-1.5 text-xs text-black/50">
                {inputs.racks} Racks
              </span>

              <span className="rounded-full bg-black/[0.04] px-3 py-1.5 text-xs text-black/50">
                {inputs.acUnits} AC Units
              </span>

              <span className="rounded-full bg-black/[0.04] px-3 py-1.5 text-xs text-black/50">
                {inputs.acTon} Ton
              </span>

            </div>

          </div>

        </div>

        {/* =================================================
            RESULTS
        ================================================= */}

        <div className="mt-6 rounded-3xl bg-[#123c48] p-7 text-white sm:p-9">

          <div className="flex flex-wrap items-end justify-between gap-5">

            <div>

              <p className="text-xs uppercase tracking-[0.3em] text-white/40">
                Project Summary
              </p>

              <h3 className="mt-2 text-2xl font-semibold">
                Your farm numbers
              </h3>

            </div>

            <p className="text-sm text-white/40">
              Planning estimate
            </p>

          </div>

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

        </div>

        {/* =================================================
            DISCLAIMER
        ================================================= */}

        <p className="mt-5 text-xs leading-6 text-black/35">
          These values are planning estimates only.
          Actual production, investment and revenue
          depend on mushroom variety, growing conditions,
          yield, market price and operating costs.
        </p>

      </div>

    </section>
  );
}

/* =========================================================
   INPUT
========================================================= */

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

      <label className="mb-2 block text-xs uppercase tracking-[0.18em] text-black/40">
        {label}
      </label>

      <input
        type="number"
        min="0"
        value={value}
        step={step}
        onChange={(e) =>
          onChange(e.target.value)
        }
        className="w-full rounded-xl border border-black/10 bg-[#fafafa] px-4 py-3 text-sm text-black outline-none transition focus:border-[#168d59] focus:ring-2 focus:ring-[#168d59]/10"
      />

    </div>
  );
}

/* =========================================================
   RESULT
========================================================= */

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
            ? "text-[#72e0a8]"
            : "text-white"
        }`}
      >
        {value}
      </p>

    </div>
  );
}