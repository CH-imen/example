import React, { useState } from 'react'
import { connect } from 'react-redux';
import { addPost } from '../JS/Actions/actions';
//La prochaine étape de notre projet consiste à faire fonctionner le composant CreatePost et à ajouter les nouveaux articles à la boutique. Pour ce faire, nous allons utiliser la fonction mapDispatchToProps, comme indiqué dans l'exemple ci-dessous
const mapDispatchToProps = dispatch => {
    return {
        addArticle: post => dispatch(addPost(post))
    }
}
const CreatePost = (props) => {
    const [title, setTitle] = useState('')
    
    const [content, setContent] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault()
        props.addArticle({
            id: Date.now(),
            title,
            content
        })
    }
    return (
        <form onSubmit={handleSubmit}>
            <div>

                <label htmlFor="Title">Title</label>
                <input type="text" name="title" id="title" onChange={e => setTitle(e.target.value)} />
            </div>
            <div>
                <label htmlFor="Content">Content:</label>
                <textarea name="content" id="content" cols="30" rows="10" onChange={e => setContent(e.target.value)} />
            </div>
            <div>
                <input type="submit" value="Add" />
            </div>


        </form>
    )
}

export default connect(null, mapDispatchToProps)(CreatePost)

//Le mapDispatchToProps est le deuxième argument dont la méthode connect a besoin, c'est pourquoi nous avons passé le null au lieu de mapSateToProps mais les deux méthodes peuvent être passées si nécessaire.

//La fonction mapDispatchToPropsprend en paramètre dispatchet renvoie un objet.
//addAtricle: La clé du premier élément dans l'objet renvoyé. C'est celui qui sera utilisé dans le composant ( props.AddArticle )
//fonction : qui prend un message comme argument (le nouveau message à ajouter) et envoie l'action d'ajout de ce nouveau message.