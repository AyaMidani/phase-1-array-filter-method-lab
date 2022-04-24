const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
stringofarguments=['Bobby','Bobby']
function findMatching(drivers,stringofarguments)
{
    return drivers.filter(
        function (drivers) { 
            return drivers.toLowerCase() === stringofarguments.toLowerCase()
    })
}
console.log(findMatching(drivers,stringofarguments))
function fuzzyMatch(drivers,array)
{
    return drivers.filter(
        function(drivers)
        {
            return drivers.substring(0,2)===array
        }
    )
}
const driver = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];
console.log(fuzzyMatch(drivers, 'Sa'))
function matchName(driver,array)
{
    return driver.filter(
        function(driver)
        {
            return driver.name===array
        }
    )
}
console.log(findMatching(driver,'Bobby'))