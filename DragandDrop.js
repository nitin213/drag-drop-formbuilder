/**
 * Created by tintin on 20-07-2016.
 */

function doOnLoad() {

    email = document.getElementById('Email');
    email.addEventListener("dragstart",dragStart,false);
    email.addEventListener("dragend",dragEnd,false);

    username = document.getElementById('username');
    username.addEventListener("dragstart",dragStart,false);
    username.addEventListener("dragend",dragEnd,false);

    password = document.getElementById('password');
    password.addEventListener("dragstart",dragStart,false);
    password.addEventListener("dragend",dragEnd,false);

    firstname = document.getElementById('firstname');
    firstname.addEventListener("dragstart",dragStart,false);
    firstname.addEventListener("dragend",dragEnd,false);

    lastname = document.getElementById('lastname');
    lastname.addEventListener("dragstart",dragStart,false);
    lastname.addEventListener("dragend",dragEnd,false);

    age = document.getElementById('age');
    age.addEventListener("dragstart",dragStart,false);
    age.addEventListener("dragend",dragEnd,false);

    gender = document.getElementById('gender');
    gender.addEventListener("dragstart",dragStart,false);
    gender.addEventListener("dragend",dragEnd,false);

    degree = document.getElementById('degree');
    degree.addEventListener("dragstart",dragStart,false);
    degree.addEventListener("dragend",dragEnd,false);

    field = document.getElementById('field');
    field.addEventListener("dragstart",dragStart,false);
    field.addEventListener("dragend",dragEnd,false);

    university = document.getElementById('university');
    university.addEventListener("dragstart",dragStart,false);
    university.addEventListener("dragend",dragEnd,false);

    description = document.getElementById('description');
    description.addEventListener("dragstart",dragStart,false);
    description.addEventListener("dragend",dragEnd,false);

    rememberme = document.getElementById('rememberme');
    rememberme.addEventListener("dragstart",dragStart,false);
    rememberme.addEventListener("dragend",dragEnd,false);

    dropbox = document.getElementById('drop-box');
    dropbox.addEventListener("dragenter",function(e) {e.preventDefault()},false);
    dropbox.addEventListener("dragover",function(e) {e.preventDefault()},false);
    dropbox.addEventListener("dragleave",function(e) {e.preventDefault()},false);
    dropbox.addEventListener("drop",onDrop,false);


}

var dragged;
function dragStart(e) {
    dragged = e.target;
    e.dataTransfer.setData("text", dragged.id);
}

function dragEnd(e) {
    e.preventDefault()
   // e.target.style.visibility='hidden';
}

function onDrop(e) {
    e.preventDefault();
    e.target.appendChild(dragged);
}

window.addEventListener("load", doOnLoad, false);

