/**
 * To run, add a year param or leave blank.
 * Also, update the folder ID string
 */

function main() {
  
  //Enter year:number param for this function or leave blank
  const year = getThisYearFromDate()
  
  //Change parentFolderId: string to that of the folder where you
  //want to create the sub folders
  const parentFolderId = 'folder-ID-here'

  createFolderNames(year).forEach((folderName) => {
    createFolders(parentFolderId, folderName)
  })
}
