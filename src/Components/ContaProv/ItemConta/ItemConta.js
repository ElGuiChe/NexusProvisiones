import ItemConta from "../ItemConta/ItemConta";

export default function ItemList({ individualExcelData }) {
  return (
    <>
      {individualExcelData.map((provision) => {
        return <ItemConta {...provision} key={provision.id} />;
      })}
    </>
  );
}
