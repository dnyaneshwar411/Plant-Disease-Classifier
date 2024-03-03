export default function Table({ headings, rows }) {
  return <table className="table-auto text-center w-full my-10">

    <thead className="uppercase font-bold">
      <TR informations={headings} />
    </thead>

    <tbody className="text-slate-500">
      {rows.map((row, i) => <TR key={i} informations={row} />)}
    </tbody>
  </table>
}

function TR({ informations }) {
  return <tr className=" border-b-2 border-[#707070]">
    {informations.map((information, i) => <td key={i}>{information}</td>)}
  </tr>
}