
$(document).ready(function () {
    $('#picture img').each(function () {
        var description = $(this).data('description');

        $(this).hover(function () {
            $('<div class="description">' + description + '</div>').insertAfter($(this)).fadeIn();
        }, function () {
            $(this).next('.description').fadeOut().remove();
        });
    })
});

 const shows = [
      { date: 'February 4, 2025', name: 'The Vanguard Jazz Orchestra', time: 'The Village Vanguard; 8:00/10:00' }, 
      { date: 'February 10, 2025', name: 'The Vanguard Jazz Orchestra', time: 'The Village Vanguard; 8:00/10:00' },
      { date: 'February 20, 2025', name: 'Tatum Greenblatt Quintet', time: 'Smalls; 7:30/9:00' },
      { date: 'June 20, 2025', name: 'Daddy Rabbit', time: '...'},
    ];

    const tourList = document.getElementById('tourList');

    shows.forEach(show => {
      const item = document.createElement('div');
      item.className = 'show-item';

      item.innerHTML = `
        <div class="show-date">${show.date}</div>
        <div class="show-details">
          <div class="show-city">${show.name}</div>
          <div class="show-venue">${show.time}</div>
        </div>
      `;

      tourList.appendChild(item);

    }); 