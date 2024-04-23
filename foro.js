document.getElementById("postForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var content = document.getElementById("postContent").value.trim();
    var author = document.getElementById("authorName").value.trim();
    
    if (content !== "" && author !== "") {
        // Agregar el mensaje al historial del usuario
        var userPost = document.createElement("div");
        userPost.classList.add("user-post");
        userPost.innerHTML = "<span class='user-post-author'>" + author + ":</span> " + content;
        document.getElementById("userPosts").appendChild(userPost);
        
        document.getElementById("postContent").value = "";
        document.getElementById("authorName").value = "";
    } else {
        alert("Por favor, completa todos los campos.");
    }
});