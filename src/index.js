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
        let li = new Comment(com)
        imgCommentsList.appendChild(li.render())
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
   let li = new Comment({
     id: parseInt(imgCommentsList.children[imgCommentsList.children.length - 1].querySelector('button').getAttribute('data-id')) + 1,
     content: commentInput.value
   })
    imgCommentsList.appendChild(li.render())

    /////Back-end//////
    ImageAdapter.addComment(commentInput.value)
    commentInput.value = ''
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