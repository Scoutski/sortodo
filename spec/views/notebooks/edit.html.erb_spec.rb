require 'rails_helper'

RSpec.describe "notebooks/edit", type: :view do
  before(:each) do
    @notebook = assign(:notebook, Notebook.create!(
      :name => "MyString",
      :color => "MyString",
      :user_id => 1
    ))
  end

  it "renders the edit notebook form" do
    render

    assert_select "form[action=?][method=?]", notebook_path(@notebook), "post" do

      assert_select "input#notebook_name[name=?]", "notebook[name]"

      assert_select "input#notebook_color[name=?]", "notebook[color]"

      assert_select "input#notebook_user_id[name=?]", "notebook[user_id]"
    end
  end
end
