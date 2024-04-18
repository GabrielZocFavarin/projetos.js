class Pessoa {
    constructor(nome, email, datanasc, tellF, tellC) {
        this.nome = nome;
        this.email = email;
        this.datanasc = datanasc;
        this.tellF = tellF;
        this.tellC = tellC;
    }
}

class Aluno extends Pessoa {
    constructor(nome, email, datanasc, tellF, tellC, curso, matriculaA) {
        super(nome, email, datanasc, tellF, tellC)
        this.curso = curso;
        this.matriculaA = matriculaA;
    }
}

class Professor extends Pessoa {
    constructor(nome, email, datanasc, tellF, tellC, especialidade, matriculaP, lattes) {
        super(nome, email, datanasc, tellF, tellC)
        this.especialidade = especialidade;
        this.matriculaP = matriculaP;
        this.lattes = lattes;
    }
}
document
    .getElementById("formulario")
    .addEventListener("submit", function (event) {
        event.preventDefault();

        const tipo = document.querySelector(
            'input[name="tipo"]:checked'
        ).value;
        const nome = document.getElementById("nome").value;
        const email = document.getElementById("email").value;
        const dataNascimento = document.getElementById("dataNascimento").value;
        const telefoneFixo = document.getElementById("telefoneFixo").value;
        const telefoneCelular = document.getElementById("telefoneCelular").value;

        if (tipo === "Professor") {
            const especialidade = document.getElementById("especialidade").value;
            const matriculaP = document.getElementById("matriculaP").value;
            const lattes = document.getElementById("lattes").value;

            const professor = new Professor(
                nome,
                email,
                dataNascimento,
                telefoneFixo,
                telefoneCelular,
                especialidade,
                matriculaP,
                lattes
            );
            exibirDadosProfessor(professor);
        } else if (tipo === "Aluno") {
            const curso = document.getElementById("curso").value;
            const matriculaA = document.getElementById("matriculaA").value;

            const aluno = new Aluno(
                nome,
                email,
                dataNascimento,
                telefoneFixo,
                telefoneCelular,
                curso,
                matriculaA
            );
            exibirDadosAluno(aluno);
        }
    });

document.getElementById("tipoA").addEventListener("change", function () {
    if (this.checked) {
        if (this.value === "Aluno") {
            document.getElementById("secAluno").style.display = "block";
            document.getElementById("secProfessor").style.display = "none";
        }
    }
});
document.getElementById("tipoP").addEventListener("change", function () {
    if (this.checked) {
        if (this.value === "Professor") {
            document.getElementById("secProfessor").style.display = "block";
            document.getElementById("secAluno").style.display = "none";
        }
    }
});

function exibirDadosProfessor(professor) {
    document.getElementById("dadosProfessor").innerHTML = `
        <tr>
            <td>${professor.nome}</td>
            <td>${professor.email}</td>
            <td>${professor.dataNascimento}</td>
            <td>${professor.tellF}</td>
            <td>${professor.tellC}</td>
            <td>${professor.especialidade}</td>
            <td>${professor.matriculaP}</td>
            <td>${professor.lattes}</td>
        </tr>`
        ;
    document.getElementById("tabelaProfessor").style.display = "table";
    document.getElementById("tabelaAluno").style.display = "none";
}

function exibirDadosAluno(aluno) {
    document.getElementById("dadosAluno").innerHTML = ` 
        <tr>
            <td>${aluno.nome}</td>
            <td>${aluno.email}</td>
            <td>${aluno.dataNascimento}</td>
            <td>${aluno.tellF}</td>
            <td>${aluno.tellC}</td>
            <td>${aluno.curso}</td>
            <td>${aluno.matriculaA}</td>
        </tr>
    `;
    document.getElementById("tabelaAluno").style.display = "table";
    document.getElementById("tabelaProfessor").style.display = "none";
}
