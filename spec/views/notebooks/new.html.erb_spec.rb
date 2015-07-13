require 'rails_helper'

RSpec.describe "notebooks/new", type: :view do
  before(:each) do
    assign(:notebook, Notebook.new(
      :name => "MyString",
      :color => "MyString",
      :user_id => 1
    ))
  end

  it "renders new notebook form" do
    render

    assert_select "form[action=?][method=?]", notebooks_path, "post" do

      assert_select "input#notebook_name[name=?]", "notebook[name]"

      assert_select "input#notebook_color[name=?]", "notebook[color]"

      assert_select "input#notebook_user_id[name=?]", "notebook[user_id]"
    end
  end
end
