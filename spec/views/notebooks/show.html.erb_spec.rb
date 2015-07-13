require 'rails_helper'

RSpec.describe "notebooks/show", type: :view do
  before(:each) do
    @notebook = assign(:notebook, Notebook.create!(
      :name => "Name",
      :color => "Color",
      :user_id => 1
    ))
  end

  it "renders attributes in <p>" do
    render
    expect(rendered).to match(/Name/)
    expect(rendered).to match(/Color/)
    expect(rendered).to match(/1/)
  end
end
