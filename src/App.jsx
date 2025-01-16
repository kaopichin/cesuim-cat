
import { Viewer, Entity, PointGraphics } from "resium";
import { Cartesian3 } from "cesium";

const position = Cartesian3.fromDegrees(108.969105,34.181933, 1);

function App() {
  return (
    <Viewer full>
      <Entity position={position} name="Tokyo" description="Hello, world.">
        <PointGraphics pixelSize={10} />
      </Entity>
    </Viewer>
  );
}

export default App;