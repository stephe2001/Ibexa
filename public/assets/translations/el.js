(function (t) {
// el
t.add("content.create_draft.success", "Created a new draft for '%name%'.", "content", "el");
t.add("content.draft.conflict.error", "Cannot check if the draft has conflicts with other drafts. %error%.", "content", "el");
t.add("content.edit.permission.error", "You don't have permission to edit this Content item", "content", "el");
t.add("content.hide.already_hidden", "Content item '%name%' is already hidden.", "content", "el");
t.add("content.hide.success", "Content item '%name%' hidden.", "content", "el");
t.add("content.main_language_update.success", "Main language for '%name%' updated.", "content", "el");
t.add("content.main_location_update.success", "Main Location for '%name%' updated.", "content", "el");
t.add("content.reveal.already_visible", "Content item '%name%' is already visible.", "content", "el");
t.add("content.reveal.success", "Content item '%name%' revealed.", "content", "el");
t.add("content_edit.autosave.status_saved.message.full", "Draft saved %time%", "content", "el");
t.add("content_edit.autosave.status_saved.message.simplified", "Saved", "content", "el");
t.add("editing_details", "under %location_name%", "content", "el");
t.add("preview_header.back", "Back", "content", "el");
t.add("tooltip.close_label", "Close", "content", "el");
t.add("trash.modal.message", "Are you sure you want to send this Content item to Trash?", "content", "el");
t.add("trash_container.modal.message_main", "Sending '%content_name%' and its %children_count% Content item(s) to Trash will also send the sub-items of this Location to Trash.", "content", "el");
t.add("user.delete.success", "User with login '%login%' deleted.", "content", "el");
t.add("tooltip.exit_label", "Exit", "content", "el");
t.add("collapse_all", "Collapse all", "content_tree", "el");
t.add("content_tree.header", "Content tree", "content_tree", "el");
t.add("expand_item.limit.message", "Cannot load sub-items for this Location because you reached max tree depth.", "content_tree", "el");
t.add("loading_more", "Loading more...", "content_tree", "el");
t.add("no_subitems", "This Location has no sub-items", "content_tree", "el");
t.add("see_more", "See more", "content_tree", "el");
t.add("show_more.limit_reached", "Loading limit reached", "content_tree", "el");
t.add("ezimage.dimensions.height", "H:%height% px", "fieldtypes_edit", "el");
t.add("ezimage.dimensions.width", "W:%width% px", "fieldtypes_edit", "el");
t.add("ezimageasset.create.message.error", "Error while creating Image Asset: %error%", "fieldtypes_edit", "el");
t.add("ezimageasset.create.message.success", "The image has been published and can now be reused", "fieldtypes_edit", "el");
t.add("ezmaplocation.create.message.error", "Area below needs correction", "fieldtypes_edit", "el");
t.add("abort.label", "Abort", "multi_file_upload", "el");
t.add("cannot_upload.message", "Cannot upload file", "multi_file_upload", "el");
t.add("delete.label", "Delete", "multi_file_upload", "el");
t.add("disallowed_content_type.message", "You do not have permission to create this Content item", "multi_file_upload", "el");
t.add("disallowed_size.message", "File size is not allowed", "multi_file_upload", "el");
t.add("disallowed_type.message", "File type is not allowed", "multi_file_upload", "el");
t.add("drop_action.message", "Drag and drop file", "multi_file_upload", "el");
t.add("drop_action.separator", "or", "multi_file_upload", "el");
t.add("edit.label", "Edit", "multi_file_upload", "el");
t.add("max_file_size.message", "Max file size:", "multi_file_upload", "el");
t.add("multi_file_upload_open_btn.label", "Upload", "multi_file_upload", "el");
t.add("upload.progress_bar.uploading", "Uploading...", "multi_file_upload", "el");
t.add("upload.success.message", "100% Uploaded", "multi_file_upload", "el");
t.add("upload_btn.label", "Upload file", "multi_file_upload", "el");
t.add("upload_popup.close", "Multi-file upload", "multi_file_upload", "el");
t.add("menu.notification", "View Notifications", "notifications", "el");
t.add("notification.close", "Close", "notifications", "el");
t.add("notification.date", "Date", "notifications", "el");
t.add("notification.description", "Description", "notifications", "el");
t.add("notification.permanently_deleted", "Deleted", "notifications", "el");
t.add("notification.trashed", "Sent to Trash", "notifications", "el");
t.add("notification.type", "Type", "notifications", "el");
t.add("notifications", "Notifications", "notifications", "el");
t.add("notifications.modal.message.error", "Cannot update notifications", "notifications", "el");
t.add("search", "\u0391\u03bd\u03b1\u03b6\u03ae\u03c4\u03b7\u03c3\u03b7", "search", "el");
t.add("search.any.content.type", "Any Content Type", "search", "el");
t.add("search.any_time", "Any time", "search", "el");
t.add("search.apply", "\u0395\u03c6\u03b1\u03c1\u03bc\u03bf\u03b3\u03ae", "search", "el");
t.add("search.clear", "Clear", "search", "el");
t.add("search.content.type", "Content Type", "search", "el");
t.add("search.created", "Created", "search", "el");
t.add("search.creator", "Creator", "search", "el");
t.add("search.creator_input.placeholder", "Type creator's name", "search", "el");
t.add("search.custom_range", "Custom range", "search", "el");
t.add("search.empty.subtitle", "Enter the phrase to find", "search", "el");
t.add("search.empty.title", "No search items", "search", "el");
t.add("search.filters.title", "Filters", "search", "el");
t.add("search.in_language", "in %search_language%", "search", "el");
t.add("search.language", "Language", "search", "el");
t.add("search.last.modified", "Last modified", "search", "el");
t.add("search.last_month", "Last month", "search", "el");
t.add("search.last_week", "Last week", "search", "el");
t.add("search.last_year", "Last year", "search", "el");
t.add("search.location", "Location", "search", "el");
t.add("search.modified", "Modified", "search", "el");
t.add("search.name", "Name", "search", "el");
t.add("search.no_results.hint.check_spelling", "Check the spelling of keywords.", "search", "el");
t.add("search.no_results.hint.different_kewords", "Try different keywords.", "search", "el");
t.add("search.no_results.hint.fewer_keywords", "Try fewer keywords. Reducing keywords results in more matches.", "search", "el");
t.add("search.no_results.hint.more_general", "Try more general keywords.", "search", "el");
t.add("search.no_results.title", "No results found for \"%query%\"", "search", "el");
t.add("search.results_for", "Results for \u201c%search_phrase%\u201d (%total%)", "search", "el");
t.add("search.section", "Section", "search", "el");
t.add("search.subtree", "Subtree", "search", "el");
t.add("search.subtree.label", "Subtree", "search", "el");
t.add("search.translation", "Translation", "search", "el");
t.add("search.type", "Content Type", "search", "el");
t.add("search.header", "Search results (%total%)", "search", "el");
t.add("search.no_result", "No results found for \"%query%\".", "search", "el");
t.add("search.search", "Search", "search", "el");
t.add("search.section.any", "Any section", "search", "el");
t.add("search.tips.check_spelling", "Check the spelling of keywords.", "search", "el");
t.add("search.tips.different_keywords", "Try different keywords.", "search", "el");
t.add("search.tips.fewer_keywords", "Try fewer keywords. Reducing keywords results in more matches.", "search", "el");
t.add("search.tips.headline", "Some helpful search tips:", "search", "el");
t.add("search.tips.more_general_keywords", "Try more general keywords.", "search", "el");
t.add("search.translations", "Translations", "search", "el");
t.add("add_locations_btn.label", "Add Locations", "sub_items", "el");
t.add("bulk_action.error.more_info", "<u><a class='ibexa-notification-btn ibexa-notification-btn--show-modal'>Click here for more information.<\/a><\/u><br>", "sub_items", "el");
t.add("bulk_action.popup.cancel", "Cancel", "sub_items", "el");
t.add("bulk_action.success.link_to_location", "<u><a href='%locationHref%'>%locationName%<\/a><\/u>", "sub_items", "el");
t.add("bulk_add_location.error.message", "%failedCount% of the %totalCount% selected Locations(s) could not be added because you do not have proper user permissions. {{ moreInformationLink }} Contact your Administrator to obtain permissions.", "sub_items", "el");
t.add("bulk_add_location.error.modal.table_title", "%itemsCount% Location(s) cannot be added", "sub_items", "el");
t.add("bulk_add_location.success.message", "Location(s) added to {{ locationLink }}.", "sub_items", "el");
t.add("bulk_delete.error.message.nonusers", "%notDeletedCount% of the %totalCount% selected item(s) could not be sent to Trash because you do not have proper user permissions. {{ moreInformationLink }} Contact your Administrator.", "sub_items", "el");
t.add("bulk_delete.error.message.users", "%notDeletedCount% of the %totalCount% selected item(s) could not be deleted because you do not have proper user permissions. {{ moreInformationLink }} Contact your Administrator.", "sub_items", "el");
t.add("bulk_delete.error.message.users_with_nonusers", "%notDeletedCount% of the %totalCount% selected item(s) could not be deleted or sent to Trash because you do not have proper user permissions. {{ moreInformationLink }} Contact your Administrator.", "sub_items", "el");
t.add("bulk_delete.error.modal.table_title.nonusers", "%itemsCount% Content item(s) cannot be sent to Trash", "sub_items", "el");
t.add("bulk_delete.error.modal.table_title.users", "%itemsCount% User(s) cannot be deleted", "sub_items", "el");
t.add("bulk_delete.error.modal.table_title.users_with_nonusers", "%itemsCount% Content item(s) cannot be deleted or sent to Trash", "sub_items", "el");
t.add("bulk_delete.popup.confirm.nonusers", "Send to Trash", "sub_items", "el");
t.add("bulk_delete.popup.confirm.users_and_users_with_nonusers", "Delete", "sub_items", "el");
t.add("bulk_delete.popup.message.nonusers", "Are you sure you want to send the selected Content item(s) to Trash?", "sub_items", "el");
t.add("bulk_delete.popup.message.users", "Are you sure you want to delete the selected user(s)?", "sub_items", "el");
t.add("bulk_delete.popup.message.users_with_nonusers", "Are you sure you want to delete the selected user(s) and send the other selected Content item(s) to Trash?", "sub_items", "el");
t.add("bulk_delete.success.message.nonusers", "Content item(s) sent to Trash.", "sub_items", "el");
t.add("bulk_delete.success.message.users", "User(s) deleted.", "sub_items", "el");
t.add("bulk_delete.success.message.users_with_nonusers", "Content item(s) sent to Trash. User(s) deleted.", "sub_items", "el");
t.add("bulk_hide.error.message", "%failedCount% of the %totalCount% selected item(s) could not be hidden because you do not have proper user permissions. {{ moreInformationLink }} Contact your Administrator to obtain permissions.", "sub_items", "el");
t.add("bulk_hide.error.modal.table_title", "%itemsCount% Content item(s) cannot be hidden", "sub_items", "el");
t.add("bulk_hide.popup.confirm", "Hide", "sub_items", "el");
t.add("bulk_hide.popup.message", "Are you sure you want to hide the selected Location(s)?", "sub_items", "el");
t.add("bulk_hide.success.message", "Location(s) hidden.", "sub_items", "el");
t.add("bulk_move.error.message", "%notMovedCount% of the %totalCount% selected item(s) could not be moved because you do not have proper user permissions. {{ moreInformationLink }} Contact your Administrator.", "sub_items", "el");
t.add("bulk_move.error.modal.table_title", "%itemsCount% Content items cannot be moved", "sub_items", "el");
t.add("bulk_move.success.message", "Content item(s) sent to {{ locationLink }}", "sub_items", "el");
t.add("bulk_request.error.message", "An unexpected error occurred while processing the Content item(s). Please try again later.", "sub_items", "el");
t.add("bulk_unhide.error.message", "%failedCount% of the %totalCount% selected Location(s) could not be revealed because you do not have proper user permissions. {{ moreInformationLink }} Contact your Administrator to obtain permissions.", "sub_items", "el");
t.add("bulk_unhide.error.modal.table_title", "%itemsCount% Location(s) cannot be revealed", "sub_items", "el");
t.add("bulk_unhide.popup.confirm", "Reveal", "sub_items", "el");
t.add("bulk_unhide.popup.message", "Are you sure you want to reveal the selected Location(s)?", "sub_items", "el");
t.add("bulk_unhide.success.message", "The selected location(s) have been revealed.", "sub_items", "el");
t.add("edit_item_btn.label", "Edit", "sub_items", "el");
t.add("hide_locations_btn.label", "Hide", "sub_items", "el");
t.add("instant.filter.placeholder", "Type to refine", "sub_items", "el");
t.add("items_list.title", "Sub-items", "sub_items", "el");
t.add("items_table.header.content_type", "Content type", "sub_items", "el");
t.add("items_table.header.contributor", "Contributor", "sub_items", "el");
t.add("items_table.header.creator", "Creator", "sub_items", "el");
t.add("items_table.header.filters", "Filters", "sub_items", "el");
t.add("items_table.header.location_id", "Location ID", "sub_items", "el");
t.add("items_table.header.location_remote_id", "Location remote ID", "sub_items", "el");
t.add("items_table.header.modified", "Modified", "sub_items", "el");
t.add("items_table.header.name", "Name", "sub_items", "el");
t.add("items_table.header.object_id", "Object ID", "sub_items", "el");
t.add("items_table.header.object_remote_id", "Object remote ID", "sub_items", "el");
t.add("items_table.header.priority", "Priority", "sub_items", "el");
t.add("items_table.header.pubished", "Published", "sub_items", "el");
t.add("items_table.header.section", "Section", "sub_items", "el");
t.add("items_table.header.translations", "Translations", "sub_items", "el");
t.add("items_table.header.visibility", "Visibility", "sub_items", "el");
t.add("items_table.row.not_visible.label", "Not Visible", "sub_items", "el");
t.add("items_table.row.visible.label", "Visible", "sub_items", "el");
t.add("languages.modal.label", "Select language", "sub_items", "el");
t.add("move_btn.label", "Move", "sub_items", "el");
t.add("no_items.message", "This location has no sub-items", "sub_items", "el");
t.add("switch_to_grid_view.btn.title", "View as grid", "sub_items", "el");
t.add("switch_to_list_view.btn.label", "View", "sub_items", "el");
t.add("switch_to_list_view.btn.title", "View as list", "sub_items", "el");
t.add("trash_btn.label", "Delete", "sub_items", "el");
t.add("udw.choose_location.title", "Choose Location", "sub_items", "el");
t.add("unhide_locations_btn.label", "Reveal", "sub_items", "el");
t.add("viewing_message", "Viewing %viewingCount% out of %totalCount% sub-items", "sub_items", "el");
t.add("trash.user_list.error", "Cannot fetch user list", "trash_ui", "el");
t.add("actions_menu.cancel", "Cancel", "universal_discovery_widget", "el");
t.add("actions_menu.confirm", "Confirm", "universal_discovery_widget", "el");
t.add("add_location.title", "Select Location", "universal_discovery_widget", "el");
t.add("back.label", "Back", "universal_discovery_widget", "el");
t.add("bookmarks.label", "Bookmarks", "universal_discovery_widget", "el");
t.add("breadcrumbs.root_location", "Root Location", "universal_discovery_widget", "el");
t.add("browse.label", "Browse", "universal_discovery_widget", "el");
t.add("browse.title", "Browse content", "universal_discovery_widget", "el");
t.add("content.create.editing_details", "under %content_name%", "universal_discovery_widget", "el");
t.add("content.create.filters.desc", "Or choose from list", "universal_discovery_widget", "el");
t.add("content_create.cancel.label", "Cancel", "universal_discovery_widget", "el");
t.add("content_create.confirm.label", "Confirm", "universal_discovery_widget", "el");
t.add("content_create.label", "Content create", "universal_discovery_widget", "el");
t.add("content_create.placeholder", "Type to refine", "universal_discovery_widget", "el");
t.add("content_edit.cancel.label", "Cancel", "universal_discovery_widget", "el");
t.add("content_edit.confirm.label", "Confirm", "universal_discovery_widget", "el");
t.add("content_edit.label", "Content edit", "universal_discovery_widget", "el");
t.add("content_table.content_type", "Content Type", "universal_discovery_widget", "el");
t.add("content_table.modified", "Modified", "universal_discovery_widget", "el");
t.add("content_table.name", "Name", "universal_discovery_widget", "el");
t.add("copy.title", "Select Location", "universal_discovery_widget", "el");
t.add("create_content.create", "Create new", "universal_discovery_widget", "el");
t.add("create_content.label", "Create new content", "universal_discovery_widget", "el");
t.add("create_content.select_content_type", "Select a Content Type", "universal_discovery_widget", "el");
t.add("create_content.select_language", "Select a language", "universal_discovery_widget", "el");
t.add("dashboard.create.title", "Create content", "universal_discovery_widget", "el");
t.add("dropdown.placeholder", "Search...", "universal_discovery_widget", "el");
t.add("ezimageasset.title", "Select Image Asset", "universal_discovery_widget", "el");
t.add("ezobjectrelationlist.title.multi", "Select Content item(s)", "universal_discovery_widget", "el");
t.add("ezobjectrelationlist.title.single", "Select a Content item", "universal_discovery_widget", "el");
t.add("filters.apply", "Apply", "universal_discovery_widget", "el");
t.add("filters.clear", "Clear", "universal_discovery_widget", "el");
t.add("filters.language", "Language", "universal_discovery_widget", "el");
t.add("filters.section", "Section", "universal_discovery_widget", "el");
t.add("filters.subtree", "Subtree", "universal_discovery_widget", "el");
t.add("filters.tag_view_change.select", "Change content", "universal_discovery_widget", "el");
t.add("filters.tag_view_select.select", "Select content", "universal_discovery_widget", "el");
t.add("filters.title", "Filters", "universal_discovery_widget", "el");
t.add("limitation.pick.error", "Could not fetch content names", "universal_discovery_widget", "el");
t.add("meta_preview.bookmarks_add", "Add to bookmarks", "universal_discovery_widget", "el");
t.add("meta_preview.bookrmarks_remove", "Remove from bookmarks", "universal_discovery_widget", "el");
t.add("meta_preview.creation_date", "Creation Date", "universal_discovery_widget", "el");
t.add("meta_preview.edit", "Edit", "universal_discovery_widget", "el");
t.add("meta_preview.edit_translation", "Select translation", "universal_discovery_widget", "el");
t.add("meta_preview.last_modified", "Last Modified", "universal_discovery_widget", "el");
t.add("meta_preview.preview", "Preview", "universal_discovery_widget", "el");
t.add("meta_preview.translations", "Translations", "universal_discovery_widget", "el");
t.add("move.title", "Select destination", "universal_discovery_widget", "el");
t.add("popup.close.label", "Close", "universal_discovery_widget", "el");
t.add("restore_under_new_location.title", "Select a Location to restore the Content item(s)", "universal_discovery_widget", "el");
t.add("search.label", "Search", "universal_discovery_widget", "el");
t.add("search.no_results", "No results found for %query%", "universal_discovery_widget", "el");
t.add("search.no_results.hint.check_spelling", "Check the spelling of keywords.", "universal_discovery_widget", "el");
t.add("search.no_results.hint.different_kewords", "Try different keywords.", "universal_discovery_widget", "el");
t.add("search.no_results.hint.fewer_keywords", "Try fewer keywords. Reducing keywords results in more matches.", "universal_discovery_widget", "el");
t.add("search.no_results.hint.more_general", "Try more general keywords.", "universal_discovery_widget", "el");
t.add("search.search_results", "Results for \u201c%search_phrase%\u201d (%total%)", "universal_discovery_widget", "el");
t.add("search.search_results.in_language", "in %search_language%", "universal_discovery_widget", "el");
t.add("select_location.error", "Cannot find children Locations with ID %idList%", "universal_discovery_widget", "el");
t.add("selected_locations.clear_selection", "Clear selection", "universal_discovery_widget", "el");
t.add("selected_locations.collapse.sidebar", "Collapse sidebar", "universal_discovery_widget", "el");
t.add("selected_locations.expand.sidebar", "Expand sidebar", "universal_discovery_widget", "el");
t.add("selected_locations.remove_all", "Remove all", "universal_discovery_widget", "el");
t.add("selected_locations.selected_items", "%count% selected item(s)", "universal_discovery_widget", "el");
t.add("sorting.date.label", "Date", "universal_discovery_widget", "el");
t.add("sorting.date.selected_label", "Sort by date", "universal_discovery_widget", "el");
t.add("sorting.grid.view", "Grid view", "universal_discovery_widget", "el");
t.add("sorting.name.asc.label", "Name A-Z", "universal_discovery_widget", "el");
t.add("sorting.name.asc.selected_label", "Sort by name A-Z", "universal_discovery_widget", "el");
t.add("sorting.name.desc.label", "Name Z-A", "universal_discovery_widget", "el");
t.add("sorting.name.desc.selected_label", "Sort by name Z-A", "universal_discovery_widget", "el");
t.add("sorting.panels.view", "Panels view", "universal_discovery_widget", "el");
t.add("sorting.tree.view", "Tree view", "universal_discovery_widget", "el");
t.add("subtree.title", "Select Location", "universal_discovery_widget", "el");
t.add("subtree_limitation.title", "Choose Locations", "universal_discovery_widget", "el");
t.add("swap.title", "Select Location to swap with", "universal_discovery_widget", "el");
t.add("anchor_btn.error.unique", "Anchor name must be unique.", "alloy_editor", "el");
t.add("anchor_btn.error.valid", "A valid anchor link is needed.", "alloy_editor", "el");
t.add("anchor_btn.label", "Anchor", "alloy_editor", "el");
t.add("anchor_edit.btn.remove.title", "Remove", "alloy_editor", "el");
t.add("anchor_edit.btn.save.title", "Save", "alloy_editor", "el");
t.add("anchor_edit.input.label", "Name:", "alloy_editor", "el");
t.add("block_text_align_center_btn.label", "Center", "alloy_editor", "el");
t.add("blocktext_align_justify_btn.label", "Justify", "alloy_editor", "el");
t.add("blocktext_align_left_btn.label", "Left", "alloy_editor", "el");
t.add("blocktext_align_right_btn.label", "Right", "alloy_editor", "el");
t.add("custom_attributes_update_btn.save_btn.label", "Save", "alloy_editor", "el");
t.add("custom_tag_update_btn.cancel_btn.label", "Cancel", "alloy_editor", "el");
t.add("custom_tag_update_btn.save_btn.label", "Save", "alloy_editor", "el");
t.add("embed.ezlocation.error", "This embedded item relies on 'ezlocation' imported from Legacy. It isn't supported by Online Editor yet.", "alloy_editor", "el");
t.add("embed_align_center_btn.label", "Center", "alloy_editor", "el");
t.add("embed_align_left_btn.label", "Left", "alloy_editor", "el");
t.add("embed_align_right_btn.label", "Right", "alloy_editor", "el");
t.add("embed_btn.label", "Embed", "alloy_editor", "el");
t.add("embed_btn.udw.title", "Select a Content item to embed", "alloy_editor", "el");
t.add("embed_update_btn.label", "Select another Content item", "alloy_editor", "el");
t.add("embed_update_btn.udw.title", "Select a Content item to embed", "alloy_editor", "el");
t.add("heading_btn.label", "Heading", "alloy_editor", "el");
t.add("image_btn.label", "Image", "alloy_editor", "el");
t.add("image_btn.udw.label", "Select an image", "alloy_editor", "el");
t.add("image_update_btn.label", "Select another image", "alloy_editor", "el");
t.add("image_update_btn.udw.title", "Select an image", "alloy_editor", "el");
t.add("link_edit_btn.action_row.remove", "Remove", "alloy_editor", "el");
t.add("link_edit_btn.action_row.save", "Save", "alloy_editor", "el");
t.add("link_edit_btn.button_row.block.placeholder.text", "Type or paste link here", "alloy_editor", "el");
t.add("link_edit_btn.button_row.link_to", "Link to:", "alloy_editor", "el");
t.add("link_edit_btn.button_row.select", "Select:", "alloy_editor", "el");
t.add("link_edit_btn.button_row.select_content", "Select content", "alloy_editor", "el");
t.add("link_edit_btn.button_row.separator", "or", "alloy_editor", "el");
t.add("link_edit_btn.info_row.new_tab", "New tab", "alloy_editor", "el");
t.add("link_edit_btn.info_row.open_in.label", "Open in:", "alloy_editor", "el");
t.add("link_edit_btn.info_row.same_tab", "Same tab", "alloy_editor", "el");
t.add("link_edit_btn.info_row.title", "Title:", "alloy_editor", "el");
t.add("link_edit_btn.udw.title", "Select content", "alloy_editor", "el");
t.add("move_down_btn.title", "Move down", "alloy_editor", "el");
t.add("move_up_btn.title", "Move up", "alloy_editor", "el");
t.add("ordered_list_btn.label", "List", "alloy_editor", "el");
t.add("paragraph_btn.label", "Paragraph", "alloy_editor", "el");
t.add("remove_block_btn.title", "Remove block", "alloy_editor", "el");
t.add("removed_content.label", "Removed", "alloy_editor", "el");
t.add("table_btn.label", "Table", "alloy_editor", "el");
t.add("toolbar_config_base.formatted_label", "Formatted", "alloy_editor", "el");
t.add("toolbar_config_base.heading_label", "Heading", "alloy_editor", "el");
t.add("toolbar_config_base.paragraph_label", "Paragraph", "alloy_editor", "el");
t.add("unordered_list_btn.label", "List", "alloy_editor", "el");
t.add("anchor_btn.label", "Anchor", "ck_editor", "el");
t.add("custom_attributes_btn.label", "Custom attributes", "ck_editor", "el");
t.add("custom_styles_btn.label", "Custom styles", "ck_editor", "el");
t.add("embed_btn.label", "Embed", "ck_editor", "el");
t.add("formatted_btn.label", "Formatted", "ck_editor", "el");
t.add("image_btn.label", "Image", "ck_editor", "el");
t.add("link_btn.label", "Link", "ck_editor", "el");
t.add("move_down_btn.title", "Move down", "ck_editor", "el");
t.add("move_up_btn.title", "Move up", "ck_editor", "el");
t.add("remove_block.title", "Remove", "ck_editor", "el");
})(Translator);
