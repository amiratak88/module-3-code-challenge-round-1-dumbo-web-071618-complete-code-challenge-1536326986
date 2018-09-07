class Comment {
  constructor(commentData) {
    this.id = commentData.id
    this.content = commentData.content
  }

  render() {
    const li = document.createElement('li')
    li.innerText = this.content
    const btn = document.createElement('button')
    btn.innerText = "x"
    btn.dataset.id = this.id
    li.appendChild(btn)
    
    return li
  }
}
