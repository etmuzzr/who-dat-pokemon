import React from "react";

function Pagination () {
    const genNumbers = [];

    for (let i = 1; i <= 1; i++) {
        genNumbers.push(i)
    }

    return (
        <nav>
            <ul className="pagination">
                {genNumbers.map(n => (
                    <li key={n} className="page-item">
                        <a href="!#" className="page-link">
                            Gen {n}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default { Pagination }