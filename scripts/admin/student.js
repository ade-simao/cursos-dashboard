import { getStudents } from "../services/profiles.js";

const container =
  document.getElementById("studentsContainer");

export async function loadStudents() {
  try {

    const students = await getStudents();

    if (!students.length) {
      container.innerHTML =
        "<p>Nenhum aluno encontrado.</p>";
      return;
    }

    container.innerHTML = students
      .map(student => `
        <div class="student-card">

          <h3>
            ${student.first_name || "Sem nome"}
          </h3>

          <p>${student.email}</p>

          <p>Status: ${student.status}</p>

        </div>
      `)
      .join("");

  } catch (error) {

    console.error(error);

    container.innerHTML =
      "<p>Erro ao carregar alunos.</p>";

  }
}