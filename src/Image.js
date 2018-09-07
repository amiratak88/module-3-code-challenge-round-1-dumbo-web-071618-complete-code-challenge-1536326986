class Image {
  constructor() {
    this.comments = []

  }

  loadImage() {
    ImageAdapter.getImage()
      .then(res => res.json())
      .then(image => {
        // not finished yet
      })
  }

  render () {
    this.comments.forEach(comment => {
      let li = new Comment(comment)
      // .. you get the idea...
    })
  }

}
