# HR Application for practicing React

## Step 1

- Create a Vite project
- Connect it to GitHub
- Set up the basic layout with fonts, colors, and base CSS

## Step 2

- Organize the `src` folder:
  - Create two components, `EmployeeCard` and `EmployeeList`, and place them in a `components` folder inside `src`.
- Set up essential CSS:
  - Add simple styling for `EmployeeCard` and `EmployeeList` to manage layout and appearance.
- Build and integrate components:
  - Import and use multiple `EmployeeCard` components inside `EmployeeList` to simulate an employee directory.
  - Import `EmployeeList` into your main `App` component and render it to show the list of employees.

## Step 3

- Add props to `EmployeeCard`:
  - Pass `name`, `role`, `department`, and two additional fields (e.g., `startDate` and `location`).
- Pass props to multiple `EmployeeCard` instances in `EmployeeList`.
- Add state to `EmployeeCard`:
  - Use state within `EmployeeCard` to manage the `role`, initializing it with the `role` prop.
- Add a role-change button:
  - In `EmployeeCard`, add a button labeled "Promote."

## Step 4

- Define a `clickHandler` function in `EmployeeCard`:
  - If the role is "Team Leader," change it back to the original role (e.g., "Developer").
  - If the role is not "Team Leader," set it to "Team Leader."
- Connect the `clickHandler` function to the button’s `onClick` event.

## Step 5

- Update the README with an overview of the app.
- List core features with brief descriptions.
- Include a quick usage guide.
- Reflect on what you’ve practiced.
- Push today’s work to GitHub.