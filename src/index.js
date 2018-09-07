document.addEventListener('DOMContentLoaded', function() {

  const img = document.querySelector('img')
  const imgName = document.querySelector('#name')
  const imgLikes = document.querySelector('#likes')
  const imgCommentsList = document.querySelector('#comments')
  const likeButton = document.querySelector('#like_button')
  const commentForm = document.querySelector('#comment_form')
  const commentInput = document.querySelector('#comment_input')

  /////Initial fetch/////
  ImageAdapter.getImage()
    .then(image => {
      // console.log(image)
      img.src = image.url
      imgName.innerText = image.name
      likes.innerText = image.like_count
      image.comments.forEach(com => {
        const li = document.createElement('li')
        li.innerText = com.content
        const btn = document.createElement('button')
        btn.innerText = "x"
        btn.dataset.id = com.id
        li.appendChild(btn)
        imgCommentsList.appendChild(li)
      })
    })

  //////Event Listeners//////
  likeButton.addEventListener("click", e => {
    /////Fron-end///////
    imgLikes.innerText = parseInt(imgLikes.innerText) + 1

    //////Back-end////////
    ImageAdapter.likeImage()
  })

  commentForm.addEventListener("submit", e => {
    e.preventDefault()
    ////Front-end///////
    const li = document.createElement('li')
    li.innerText = commentInput.value
    const btn = document.createElement('button')
    btn.innerText = "x"

    /////Back-end//////
    ImageAdapter.addComment(commentInput.value)
      .then(com => btn.dataset.id = com.id)
    ////Front-end continued/////
    commentInput.value = ''
    li.appendChild(btn)
    imgCommentsList.appendChild(li)
  })

  imgCommentsList.addEventListener("click", e => {
    if (e.target.nodeName === "BUTTON") {
      /////Fron-end//////
      e.target.parentNode.remove()

      /////Back-end/////
      ImageAdapter.deleteComment(e.target.dataset.id)
    }
  })

})