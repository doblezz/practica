// custom Action / File image
$(".btn_image_file").click(function(){
    var subir_btn = document.getElementById("formFileSm");
    subir_btn.click();
});

// Preview custom / file
var profileImage = document.getElementById("image_img");
var upload_file = document.getElementById("formFileSm");

upload_file.onchange = function(){
    var i = URL.createObjectURL(upload_file.files[0])
    profileImage.style.backgroundImage =`url("${i}")`;
    swal("Bien", "Imagen Agregada", "success");
}

// Notification Sweet alert / Setting
// Sent Form
document.getElementById('btn_form').addEventListener('click', function(){
    swal("Excelente!", "Formulario enviado con exito", "success");
});





// Contact client / dinamic
const contact = document.getElementById('contact_client');
const btn_more = document.getElementById('btn_more');

// Count contact
let total = 1;

btn_more.addEventListener('click', e => {

    var NewNode = document.createElement('div');
    NewNode.className = 'row gy-2 gx-3 mt-2';
    NewNode.innerHTML = `
    <div class="row gy-2 gx-3 mt-2" id="dinamic">
    <div class="col-auto">
        <label class="visually-hidden" for="autoSizingInputGroup">Username</label>
        <div class="input-group">
          <div class="input-group-text">Nombre</div>
          <input type="text" class="form-control" id="autoSizingInputGroup" placeholder="Ej. Pedro Perez">
        </div>
      </div>

    <div class="col-auto">
        <label class="visually-hidden" for="autoSizingInputGroup">Username</label>
        <div class="input-group">
          <div class="input-group-text">Tel.</div>
          <input type="text" class="form-control" id="autoSizingInputGroup" placeholder="809-000-0000">
        </div>
      </div>

      <div class="col-auto">
        <label class="visually-hidden" for="autoSizingInputGroup">Username</label>
        <div class="input-group">
          <div class="input-group-text">Correo</div>
          <input type="text" class="form-control" id="autoSizingInputGroup" placeholder="test@example.com">
        </div>
      </div>
</div>
    `;

    if(total == 3){
        swal("Lo siento", "Ya no puedes agregar mas contactos", "error");
    }else{
        contact.appendChild(NewNode);
        total++
        console.log(total);
    }
})