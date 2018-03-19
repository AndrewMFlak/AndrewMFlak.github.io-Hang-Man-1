Main = {};
Main.WordArray = [];
Main.WordUArray = [];

Main.Lives = 4;
Main.NumInWordBank = Words.length;
Main.Word = "test";
Main.WordU = "";
// function starts here 

Main.Pullword = function () {
    Main.Word = Words.List[(Math.floor(Math.random() + Main.NumInWordBank))];
}
Main.SetUnderline = function () {
    Main.Pullword();
    for (i = 0; i < Main.Word.length; i++) {
        Main.WordArray[i] = Main.Word.charAt(i);
        Main.WordUArray[i] = "_";
    }
    Main.WordU = Main.WordUArray.join("");
    document.getElementById("WORD").innerHTML = Main.WordU;
    document.getElementById("numLetters").innerHTML = Main.Word.length;

}
Main.UpdateLetter = function (letter) {
    Main.Changes = 0;
    for (i = 0; i < Main.Word.length; i++) {
        Main.WordArray[i] = Main.Word.charAt(i);
        if (Main.Word.charAt(i) == letter) {
            Main.WordUArray[i] = letter;
            Main.Changes += 1;
            Main.WordU = Main.WordUArray.join("");
            document.getElementById("WORD").innerHTML = Main.WordU;

        }
    }
    if (Main.Changes < 1) {
        Main.Lines -= 1;
        document.getElementById("lives").innerHTML = Main.Lives;
    }

    Main.Word1 = Main.wordArray.join("");
    Main.Word2 = Main.wordUArray.join("");
    if (Main.Word1 == Main.Word2) {
        alert("You Won! Loading a New Word");
        window.location.reload();
    }
    if (Main.Lives < 1) {
        document.getElementById("WORD").innerHTML == Main.Word1;
        alert("You Have Run Out of Lives, Please Try Again.");
        window.location.reload();
    }
}
Main.Pullword();
Main.SetUnderline();