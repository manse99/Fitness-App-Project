function EditModal() {
    async function handleSubmit() {

    }

    function handleChange() {

    }

    return(
        <div className="editModal">
            <div className="closeEditModal">X</div>
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder="Edit type"></input>
                <input type='text' placeholder="Edit duration"></input>
                <input type='text' placeholder="Edit intensity"></input>
                <input type='text' placeholder="Edit upper/lower"></input>
                <input type='text' placeholder="Edit weight"></input>
                <input type='text' placeholder="Edit sets"></input>
                <div>
          <h3>Upper Body</h3>
        <input
          id="upperBody-true"
          type="radio"
          name="upperBody"
          value="true"
          onChange={handleChange}
        />
        <label htmlFor="upperBody-true">True</label>
        <input
          id="upperBody-false"
          type="radio"
          name="upperBody"
          value="false"
          onChange={handleChange}
          />
        <label htmlFor="upperBody-false">False</label>
        </div>
            </form>

        </div>
    )
}

export default EditModal