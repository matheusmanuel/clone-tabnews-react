import React from 'react';

function calculateElapsedTime(timePostCreat) { //Calcular tempo ocorrido
    // Calcular o tempo decorrido desde o post
    const dataPostagem = new Date(timePostCreat);
    const tempoAtual = new Date();

    const diffEmMilissegundos = tempoAtual - dataPostagem;
    const diffEmSegundos = Math.floor(diffEmMilissegundos / 1000);
    const diffEmMinutos = Math.floor(diffEmSegundos / 60);
    const diffEmHoras = Math.floor(diffEmMinutos / 60);
    const diffEmDias = Math.floor(diffEmHoras / 24);
    const diffEmAnos = Math.floor(diffEmDias / 365);

    let tempoDecorrido;

    if (diffEmAnos > 0) {
        tempoDecorrido = `${diffEmAnos} ano${diffEmAnos > 1 ? "s" : ""} atrás`;
    } else if (diffEmDias > 0) {
        tempoDecorrido = `${diffEmDias} dia${diffEmDias > 1 ? "s" : ""} atrás`;
    } else if (diffEmHoras > 0) {
        tempoDecorrido = `${diffEmHoras} hora${diffEmHoras > 1 ? "s" : ""} atrás`;
    } else if (diffEmMinutos > 0) {
        tempoDecorrido = `${diffEmMinutos} minuto${diffEmMinutos > 1 ? "s" : ""
            } atrás`;
    } else {
        tempoDecorrido = `${diffEmSegundos} segundo${diffEmSegundos > 1 ? "s" : ""
            } atrás`;
    }

    return tempoDecorrido;
}


const Post = (props) => {
    let created_at = props.created_at;
    let timePost = calculateElapsedTime(created_at);

    return (
        <article className="post">
            <a href="/" className="post-name">{props.name}</a>
            <div>
                <span className="post-tabcoins">{props.tabcoins} tabcoins </span>. 
                <span className="post-coment-length"> {props.comments} comentários</span> .
                <span className="post-user"> {props.user}</span> .
                <span className="post-time-published">{timePost}</span>
            </div>
        </article>
    )
}

export default Post;