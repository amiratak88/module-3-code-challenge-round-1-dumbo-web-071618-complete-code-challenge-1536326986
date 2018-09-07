const imageId = 71
const imageURL = `https://randopic.herokuapp.com/images/${imageId}`
const likeURL = `https://randopic.herokuapp.com/likes/`
const commentsURL = `https://randopic.herokuapp.com/comments/`

class ImageAdapter {
    static getImage() {
        return fetch(imageURL)
            .then(res => res.json())
    }

    static likeImage() {
        return fetch(likeURL, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                image_id: imageId
            })
        })
            .then(res => res.json())
    }

    static addComment(content) {
        return fetch(commentsURL, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                image_id: imageId,
                content: content
            })
        })
            .then(res => res.json())
    }

    static deleteComment(id) {
        return fetch(commentsURL + id, {
            method: 'DELETE'
        })
            .then(res => res.json())
    }

}