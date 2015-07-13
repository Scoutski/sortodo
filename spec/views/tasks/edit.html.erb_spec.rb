require 'rails_helper'

RSpec.describe "tasks/edit", type: :view do
  before(:each) do
    @task = assign(:task, Task.create!(
      :name => "MyString",
      :location => "MyString",
      :files => "MyText",
      :notebook_id => 1
    ))
  end

  it "renders the edit task form" do
    render

    assert_select "form[action=?][method=?]", task_path(@task), "post" do

      assert_select "input#task_name[name=?]", "task[name]"

      assert_select "input#task_location[name=?]", "task[location]"

      assert_select "textarea#task_files[name=?]", "task[files]"

      assert_select "input#task_notebook_id[name=?]", "task[notebook_id]"
    end
  end
end
