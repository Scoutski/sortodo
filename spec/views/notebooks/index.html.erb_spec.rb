require 'rails_helper'

RSpec.describe "notebooks/index", type: :view do
  before(:each) do
    assign(:notebooks, [
      Notebook.create!(
        :name => "Name",
        :color => "Color",
        :user_id => 1
      ),
      Notebook.create!(
        :name => "Name",
        :color => "Color",
        :user_id => 1
      )
    ])
  end

  it "renders a list of notebooks" do
    render
    assert_select "tr>td", :text => "Name".to_s, :count => 2
    assert_select "tr>td", :text => "Color".to_s, :count => 2
    assert_select "tr>td", :text => 1.to_s, :count => 2
  end
end
