function hideForm() {
    let trigger = document.getElementsByClassName('.trigger');
    let hidden = document.getElementsByClassName('.hidden_opt_form');
    if (trigger === false) {
        document.getElementsByClassName('.opt').display = "none";
        document.getElementsByClassName('.hidden_opt_form').display = "none";
    };
}