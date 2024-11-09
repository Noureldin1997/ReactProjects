function Stats({ numItems, numPacked }) {
  return (
    <footer className="stats">
      <h3>
        You have {numItems} items on your list, and you already packed{" "}
        {numPacked} items. ({(numPacked / numItems) * 100})%
      </h3>
    </footer>
  );
}

export default Stats;
