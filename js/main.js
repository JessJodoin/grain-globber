var writeGrains = function (items) {

  items.forEach(function (item) {

    var $li = $('<li>');

    $li.html(item);
    $('ul').append($li);

    $li.append(`<img src="images/${item.img}" alt="">`);
    $li.append(`<h2>${item.name}</h2>`);
    $li.append(`<p>${item.desc}</p>`);
  });
};

writeGrains(grains);
