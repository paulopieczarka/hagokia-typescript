import WorldMap from '~world/WorldMap';

abstract class Generator {
  public abstract generate(): WorldMap;
}

export default Generator;
