Scenario
========
From endpoint we acquired a response in a form of a map, where keys are a category of labels.

Value is an array of said labels that should be displayed in component template.
Client however would like them to be grouped in sections based on label type.

* Project section: `project_evaluation` and `project_category`
* User section: `role_category`
* Issue section: `issue_type` and `priority`

Each of these sections should also have a heading text specific to them (Project section, user section, issue section)

Process data to acquire one data structure that you will be able to iterate on in template to display data with just
one template repetition.

Don't display label if it is inactive.

Use Vue.js template to create simple template and display effect.