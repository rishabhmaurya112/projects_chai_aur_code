const details = document.querySelector('.key');

document.addEventListener('keydown', function (e) {
    console.log(e);
    details.innerHTML = `
        <div>
            <table>
            <tr>
                <th>key</th>
                <th>key Code</th>
                <th>Code</th>
            </tr>
            <tr>
                <td>${e.key === ' ' ? 'space' : e.key}</td>
                <td>${e.keyCode}</td>
                <td>${e.code}</td>
            </tr>
        </table>
        </div>
    `
})