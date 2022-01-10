class ObjectMethodsService {
  getEnhancedObject(rawObject) {
    const enhancedObject = {
      ...rawObject,
      valueOf() {
        return rawObject.age;
      },
    };
    return enhancedObject;
  }

  getEnhancedObject2(rawObject) {
    const enhancedObject = {
      ...rawObject,
      toString() {
        return `[name="${rawObject.name}",age=${rawObject.age}]`;
      },
    };
    return enhancedObject;
  }

  getEnhancedObjectWithoutValueOfOrToString(rawObject) {
    const enhancedObject = {
      ...rawObject,
      [Symbol.toPrimitive](coertionType) {
        const mapValuesByType = {
          string: `[name="${rawObject.name}",age=${rawObject.age}]`,
          number: rawObject.age,
        };

        if(mapValuesByType[coertionType] !== undefined || mapValuesByType[coertionType] !== null) {
          return mapValuesByType[coertionType]
        }

        return mapValuesByType.string
      },
    };
    return enhancedObject;
  }
}

module.exports = ObjectMethodsService;
