import React, { Fragment, useState } from 'react'

const EditTodos = ({ todo }) => {
	const [description, setDescription] = useState(todo.description)

	console.log(todo)

	return (
		<Fragment>
			<button
				type='button'
				class='btn btn-warning'
				data-toggle='modal'
				data-target={`#id${todo.todo_id}`}>
				Edit
			</button>

			<div
				class='modal fade'
				id={`id${todo.todo_id}`}
				tabindex='-1'
				role='dialog'
				aria-labelledby='exampleModalLabel'
				aria-hidden='true'>
				<div class='modal-dialog' role='document'>
					<div class='modal-content'>
						<div class='modal-header'>
							<h5 class='modal-title' id='exampleModalLabel'>
								Edit todo
							</h5>
							<button
								type='button'
								class='close'
								data-dismiss='modal'
								aria-label='Close'>
								<span aria-hidden='true'>&times;</span>
							</button>
						</div>
						<div class='modal-body'>
							<input type='text' className='form-control' value={description} />
						</div>
						<div class='modal-footer'>
							<button
								type='button'
								class='btn btn-warning'
								data-dismiss='modal'>
								Edit
							</button>
							<button type='button' class='btn btn-danger' data-dismiss='modal'>
								Close
							</button>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	)
}

export default EditTodos
