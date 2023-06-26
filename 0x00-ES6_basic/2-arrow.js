export default function getNeighborhoodList() {
  this.sanFrancisoNeighborhoods = ['SOMA', 'Union Square'];

  const self = this;
  this.addNeighborhood = (newNeighborhood) => {
    self.sanFrancisoNeighborhoods.push(newNeighborhood);
    return self.sanFrancisoNeighborhoods;
  };
}
