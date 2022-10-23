import React from 'react'
import {Link} from 'react-router-dom'

export const LinksList = ({ links }) => {
  if (!links.length) {
    return <p className="center">Ссылок пока нет</p>
  }

  return (
    <div>
      <table>
        <thead>
        <tr>
          <th>№</th>
          <th>Орігінальна</th>
          <th>Скорочення</th>
          <th>Відкрити</th>
        </tr>
        </thead>

        <tbody>
        { links.map((link, index) => {
          return (
            <tr key={link._id}>
              <td>{index + 1}</td>
              <td className="linkFrom">{link.from}</td>
              <td>{link.to}</td>
              <td>
                <Link to={`/detail/${link._id}`}>Відкрити</Link>
              </td>
            </tr>
          )
        }) }
        </tbody>
      </table>
    </div>
  )
}
