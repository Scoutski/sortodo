require 'rails_helper'

RSpec.describe "tasks/new", type: :view do
  before(:each) do
    assign(:task, Task.new(
      :name => "MyString",
      :location => "MyString",
      :files => "MyText",
      :notebook_id => 1
    ))
  end

  it "renders new task form" do
    render

    assert_select "form[action=?][method=?]", tasks_path, "post" do

      assert_select "input#task_name[name=?]", "task[name]"

      assert_select "input#task_location[name=?]", "task[location]"

      assert_select "textarea#task_files[name=?]", "task[files]"

      assert_select "input#task_notebook_id[name=?]", "task[notebook_id]"
    end
  end
end
