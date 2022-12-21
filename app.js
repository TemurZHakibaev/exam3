var $form = document.querySelector("#form"),
  $list = document.querySelector("#list"),
  $size = document.querySelectorAll(".size-wrapper__input"),
  $incl = document.querySelectorAll("#includes li"),
  $thickPaste = document.querySelector(".pizza_thick"),
  $sizePaste = document.querySelector(".pizza_size"),
  $elPaste = document.querySelector(".pizza_el"),
  $addPaste = document.querySelector(".pizza_add"),
  pizza = document.querySelectorAll(".hold__input"),
  added = document.querySelectorAll(".hold__inputt"),
  opt = document.querySelector(".form-select"),
  $name = document.querySelector("#imya"),
  $noner = document.querySelector("#nomer"),
  $span1 = document.querySelector(".span1"),
  $span2 = document.querySelector(".span2"),
  $modal = document.querySelector(".modal"),
  $closer = document.querySelector("#close-btn");

var userArray = [];
$form.addEventListener("submit", (evt) => {
  evt.preventDefault();

  var { user_name, user_phone, user_email, size, thikness } =
    evt.target.elements;

  var pizza_arr = [];
  var price_pizza = [];

  for (var i = 0; i < pizza.length; i++) {
    if (pizza[i].checked) {
      pizza_arr.push(pizza[i].value);
      price_pizza.push(Number(pizza[i].dataset.price2));
    }
  }

  var arr = [];
  var price_arr = [];
  for (var i = 0; i < added.length; i++) {
    if (added[i].checked) {
      arr.push(added[i].value);
      price_arr.push(Number(added[i].dataset.price1));
    }
  }
  var arr1 = [];
  var price_arr1 = [];
  for (var i = 0; i < $size.length; i++) {
    if ($size[i].checked) {
      arr1.push($size[i].value);
      price_arr1.push(Number($size[i].dataset.price));
    }
  }

  var arr2 = [];
  var price_arr2 = [];
  for (var i = 0; i < opt.length; i++) {
    if (opt[i].selected) {
      arr2.push(opt[i].value);
      price_arr2.push(Number(opt[i].dataset.price));
    }
  }
  var num1 = price_pizza.map((i) => (x += i), (x = 0)).reverse()[0],
    num2 = price_arr.map((i) => (x += i), (x = 0)).reverse()[0],
    num3 = price_arr2.map((i) => (x += i), (x = 0)).reverse()[0],
    num4 = price_arr1.map((i) => (x += i), (x = 0)).reverse()[0],
    sum = num1 + num2 + num3 + num4;

  var newObj = {
    id: userArray.length + 1,
    name: user_name.value.trim(),
    phone: user_phone.value.trim(),
    email: user_email.value.trim(),
    thick: thikness.value.trim(),
    size: size.value.trim(),
    on: pizza_arr.join(", "),
    add: arr.join(", "),
    Total: sum,
  };
  userArray.push(newObj);
  renderFunction(userArray, $list);

  $modal.classList.add("active");
  //   $closer.classList.remove("active");
});
// $closer.addEventListener("click", () => {
//   $closer.classList.remove("active");
// });

$name.addEventListener("input", (e) => {
  var value = e.target.value;
  if (value.length < 4) {
    $span1.style.display = "block";
  } else {
    $span1.style.display = "none";
  }
});
$noner.addEventListener("input", (e) => {
  var value = e.target.value;
  if (value.length < 9) {
    $span2.style.display = "block";
  } else {
    $span2.style.display = "none";
  }
});

var renderFunction = (array, element) => {
  element.innerHTML = null;
  for (var i = 0; i < array.length; i++) {
    element.innerHTML += `
<li class="spat">
            <p class="qwe">Ваш индекс: ${array[i].id}</p>
            <p class="qwe">Вфше имя: ${array[i].name}</p>
            <p class="qwe">Ваш номер: ${array[i].phone}</p>
            <p class="qwe">Ваш E-mail: ${array[i].email}</p>
                <hr class="hrr">
            <p class="qwe">Слой: ${array[i].thick}</p>
            <p class="qwe">Разиер: ${array[i].size}</p>
            <p class="qwe">Выбрано: ${array[i].on}</p>
            <p class="qwe">Добавлено: ${array[i].add}</p>
            <p class="qwe">Total: ${array[i].Total}$</p>
            </li>
        `;
  }
};
