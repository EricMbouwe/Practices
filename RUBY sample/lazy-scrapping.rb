require "selenium-webdriver"

driver = Selenium::WebDriver.for :chrome
driver.navigate.to "http://lazyautomation.co.uk/lazy1.html"
driver.manage.window.maximize

sleep(2)

driver.find_element(:id, 'hello1').click #apply for btn, radioBtn, checkboxes, links
#driver.find_element(:name, 'helloworld').click
#driver.find_element(:xpath, '//*[@id="hello1"]').click

driver.find_element(:id, 'textfield1').send_keys('Fill an input field')

dropdown = driver.find_element(:id, 'options1')
option = Selenium::WebDriver::Support::Select.new(dropdown)
option.select_by(:value, 'c')

sleep(1)

driver.find_element(:link_text, 'This is a link to another website').click

sleep(3)