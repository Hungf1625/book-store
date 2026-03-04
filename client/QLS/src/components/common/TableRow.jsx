import { Link } from 'react-router-dom';

function TableRow({ title, value, isLink = false, path = "" }) {
  return (
    <tr className="border-b border-gray-200 last:border-b-0">
      <th className="text-left py-3 text-gray-600 text-sm font-normal align-top w-50">
        {title}
      </th>
      <td className="py-3">
        {isLink ? (
          <Link 
            to={path} 
            className="text-green-500 hover:text-green-700 transition"
          >
            {value}
          </Link>
        ) : (
          value
        )}
      </td>
    </tr>
  );
}

export default TableRow;