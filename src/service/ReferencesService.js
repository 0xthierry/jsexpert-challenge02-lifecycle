class ReferencesService {
  getCounterCopyingReferences(object) {
    const sameReference = object;
    return sameReference;
  }

  getCounterWithoutCopyingReferences(object) {
    const newReference = Object.create(object);
    return newReference;
  }

  getCounterWithoutDeepCopyingReferences(object) {
    const newReferenceDeep = JSON.parse(JSON.stringify(object));
    return newReferenceDeep;
  }
}

module.exports = ReferencesService;
